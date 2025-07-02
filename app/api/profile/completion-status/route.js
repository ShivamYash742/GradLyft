import { prisma } from "../../../utils/db";
import { getSession } from "../../../api/auth/auth-utils";

export async function GET() {
  try {
    // Get session to authenticate the user
    const session = await getSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const userId = session.user.id;
    const userRole = session.user.role;

    // For student profiles
    if (userRole === 'STUDENT') {
      // Get the full student profile with skills
      const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId },
        include: {
          skills: true
        }
      });

      if (!studentProfile) {
        return Response.json({ 
          success: false, 
          message: "Student profile not found" 
        }, { status: 404 });
      }

      const profileSections = {
        personalInfo: Boolean(studentProfile.name),
        education: Boolean(studentProfile.college && studentProfile.degree && studentProfile.year),
        skills: Boolean(studentProfile.skills && studentProfile.skills.length > 0),
        experience: Boolean(studentProfile.workingStatus === 'PROFESSIONAL'),
        projects: false, // This field doesn't exist in schema, so assume incomplete
        resume: Boolean(studentProfile.cvUrl),
        references: false, // This field doesn't exist in schema, so assume incomplete
        certifications: false // This field doesn't exist in schema, so assume incomplete
      };

      // Calculate completion percentage
      const totalSections = Object.keys(profileSections).length;
      const completedSections = Object.values(profileSections).filter(Boolean).length;
      const completionPercentage = Math.floor((completedSections / totalSections) * 100);

      console.log("Student profile completion:", {
        profileSections,
        completedSections,
        totalSections,
        completionPercentage
      });

      return Response.json({ 
        success: true,
        profileSections,
        completionPercentage,
        profileType: 'STUDENT'
      });
    }
    
    // For professional profiles
    else if (userRole === 'PROFESSIONAL') {
      // Get the full professional profile
      const professionalProfile = await prisma.professionalProfile.findUnique({
        where: { userId }
      });

      if (!professionalProfile) {
        return Response.json({ 
          success: false, 
          message: "Professional profile not found" 
        }, { status: 404 });
      }

      const profileSections = {
        personalInfo: Boolean(professionalProfile.name),
        education: false, // Professionals may not need education info
        skills: Boolean(professionalProfile.skills && professionalProfile.skills.length > 0),
        experience: Boolean(professionalProfile.experience > 0),
        projects: false,
        resume: false,
        references: false,
        certifications: false
      };

      // Calculate completion percentage
      const totalSections = Object.keys(profileSections).length;
      const completedSections = Object.values(profileSections).filter(Boolean).length;
      const completionPercentage = Math.floor((completedSections / totalSections) * 100);

      return Response.json({ 
        success: true,
        profileSections,
        completionPercentage,
        profileType: 'PROFESSIONAL'
      });
    }
    
    else {
      return Response.json({ 
        success: false, 
        message: "Unsupported user role or missing profile" 
      }, { status: 400 });
    }
  } catch (error) {
    console.error("Profile completion status error:", error);
    return Response.json({ 
      success: false, 
      message: "Error fetching profile completion status",
      details: error.message
    }, { status: 500 });
  }
} 