import { prisma } from "../../../utils/db";
import { getServerSession } from "../../auth/[...nextauth]/route";

export async function PUT(req) {
  try {
    // Get session to authenticate the user
    const session = await getServerSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const data = await req.json();
    const { profileType, ...profileData } = data;
    const userId = session.user.id;

    // Validate user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: true,
        employer: true
      }
    });

    if (!user) {
      return Response.json({ 
        success: false, 
        message: "User not found" 
      }, { status: 404 });
    }

    if (profileType === 'student') {
      // Update student profile
      if (!user.student) {
        return Response.json({
          success: false, 
          message: "Student profile not found" 
        }, { status: 404 });
      }

      // Process date fields
      if (profileData.dob && typeof profileData.dob === 'string') {
        profileData.dob = new Date(profileData.dob);
      }

      // Process numeric fields
      if (profileData.year && typeof profileData.year === 'string') {
        profileData.year = parseInt(profileData.year, 10);
      }

      const updatedProfile = await prisma.studentProfile.update({
        where: { id: user.student.id },
        data: profileData
      });

      return Response.json({ 
        success: true, 
        profile: updatedProfile 
      });
    } 
    else if (profileType === 'employer') {
      // Update employer profile
      if (!user.employer) {
        return Response.json({
          success: false, 
          message: "Employer profile not found" 
        }, { status: 404 });
      }

      const updatedProfile = await prisma.employerProfile.update({
        where: { id: user.employer.id },
        data: profileData
      });

      return Response.json({ 
        success: true, 
        profile: updatedProfile 
      });
    }
    else {
      return Response.json({ 
        success: false, 
        message: "Invalid profile type" 
      }, { status: 400 });
    }
  } catch (error) {
    console.error("Profile update error:", error);
    return Response.json({ 
      success: false, 
      message: "Error updating profile",
      details: error.message
    }, { status: 500 });
  }
} 