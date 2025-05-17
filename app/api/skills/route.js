import { prisma } from "../../utils/db";
import { getServerSession } from "../auth/[...nextauth]/route";

// GET - Retrieve student skills
export async function GET(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const userId = session.user.id;

    // Get student profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: true
      }
    });

    if (!user || !user.student) {
      return Response.json({ 
        success: false, 
        message: "Student profile not found" 
      }, { status: 404 });
    }

    // Get student skills
    const skills = await prisma.studentSkill.findMany({
      where: { studentId: user.student.id },
      orderBy: { updatedAt: 'desc' }
    });

    return Response.json({ 
      success: true, 
      skills 
    });
  } catch (error) {
    console.error("Skills retrieval error:", error);
    return Response.json({ 
      success: false, 
      message: "Error retrieving skills",
      details: error.message
    }, { status: 500 });
  }
}

// POST - Add a new skill
export async function POST(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const userId = session.user.id;
    const { name, proficiency } = await req.json();
    
    if (!name) {
      return Response.json({ 
        success: false, 
        message: "Skill name is required" 
      }, { status: 400 });
    }

    // Ensure proficiency is within 0-100
    const parsedProficiency = parseInt(proficiency, 10) || 0;
    const validProficiency = Math.max(0, Math.min(100, parsedProficiency));
    
    // Get student profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: true
      }
    });

    if (!user || !user.student) {
      return Response.json({ 
        success: false, 
        message: "Student profile not found" 
      }, { status: 404 });
    }

    // Create new skill
    const skill = await prisma.studentSkill.create({
      data: {
        studentId: user.student.id,
        name,
        proficiency: validProficiency
      }
    });

    return Response.json({ 
      success: true, 
      skill
    });
  } catch (error) {
    console.error("Skill creation error:", error);
    
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return Response.json({ 
        success: false, 
        message: "You already have this skill in your profile" 
      }, { status: 400 });
    }
    
    return Response.json({ 
      success: false, 
      message: "Error adding skill",
      details: error.message
    }, { status: 500 });
  }
} 