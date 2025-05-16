import { prisma } from "../../utils/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, password, role, ...profile } = data;

    console.log('Signup attempt with:', { email, role });

    if (!email || !password || !role) {
      return Response.json({ 
        success: false, 
        message: "Missing required fields" 
      }, { status: 400 });
    }

    try {
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        return Response.json({ 
          success: false, 
          message: "User already exists" 
        }, { status: 400 });
      }
    } catch (dbError) {
      console.error("Database lookup error:", dbError);
      return Response.json({ 
        success: false, 
        message: "Database error during user lookup", 
        details: dbError.message 
      }, { status: 500 });
    }

    let hashed;
    try {
      hashed = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error("Password hashing error:", hashError);
      return Response.json({ 
        success: false, 
        message: "Error hashing password", 
        details: hashError.message 
      }, { status: 500 });
    }

    const userData = {
      email,
      password: hashed,
      role
    };

    if (role === "STUDENT") {
      const { student } = profile;
      if (!student) {
        return Response.json({ 
          success: false, 
          message: "Student profile data is required" 
        }, { status: 400 });
      }
      
      const { name, college, degree, year, interests, cvUrl } = student;

      console.log('Student profile data:', { name, college, degree, year, interests });

      if (!name || !college || !degree || !year || !interests) {
        return Response.json({ 
          success: false, 
          message: "Incomplete student profile" 
        }, { status: 400 });
      }

      userData.student = {
        create: { 
          name, 
          college, 
          degree, 
          year: parseInt(year, 10) || 2023, 
          interests, 
          cvUrl: cvUrl || "" 
        }
      };
    }

    if (role === "EMPLOYER") {
      const { employer } = profile;
      if (!employer) {
        return Response.json({ 
          success: false, 
          message: "Employer profile data is required" 
        }, { status: 400 });
      }
      
      const { name, company, designation } = employer;

      console.log('Employer profile data:', { name, company, designation });

      if (!name || !company || !designation) {
        return Response.json({ 
          success: false, 
          message: "Incomplete employer profile" 
        }, { status: 400 });
      }

      userData.employer = {
        create: { name, company, designation }
      };
    }

    console.log('Creating user with data:', JSON.stringify(userData, null, 2));

    try {
      const user = await prisma.user.create({ 
        data: userData,
        include: {
          student: true,
          employer: true
        }
      });

      console.log('User created successfully:', user.id);
      return Response.json({ userId: user.id, success: true });
    } catch (createError) {
      console.error("User creation error:", createError);
      return Response.json({ 
        success: false, 
        message: "Error creating user", 
        details: createError.message 
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Signup error:", error);
    return Response.json({ 
      success: false, 
      message: "Server error during signup", 
      details: error.message 
    }, { status: 500 });
  }
} 