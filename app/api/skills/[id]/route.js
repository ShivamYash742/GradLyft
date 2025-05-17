import { prisma } from "../../../utils/db";
import { getServerSession } from "../../auth/auth-utils";

// PUT - Update an existing skill
export async function PUT(req, { params }) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const skillId = params.id;
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

    // Get student profile first
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

    // Find the skill and ensure it belongs to this student
    const existingSkill = await prisma.studentSkill.findUnique({
      where: { id: skillId }
    });

    if (!existingSkill || existingSkill.studentId !== user.student.id) {
      return Response.json({ 
        success: false, 
        message: "Skill not found or you don't have permission to edit it" 
      }, { status: 404 });
    }

    // Update the skill
    const updatedSkill = await prisma.studentSkill.update({
      where: { id: skillId },
      data: {
        name,
        proficiency: validProficiency,
        updatedAt: new Date()
      }
    });

    return Response.json({ 
      success: true, 
      skill: updatedSkill
    });
  } catch (error) {
    console.error("Skill update error:", error);
    
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return Response.json({ 
        success: false, 
        message: "You already have a skill with this name" 
      }, { status: 400 });
    }
    
    return Response.json({ 
      success: false, 
      message: "Error updating skill",
      details: error.message
    }, { status: 500 });
  }
}

// DELETE - Remove a skill
export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return Response.json({ 
        success: false, 
        message: "Unauthorized" 
      }, { status: 401 });
    }

    const skillId = params.id;
    const userId = session.user.id;

    // Get student profile first
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

    // Find the skill and ensure it belongs to this student
    const existingSkill = await prisma.studentSkill.findUnique({
      where: { id: skillId }
    });

    if (!existingSkill || existingSkill.studentId !== user.student.id) {
      return Response.json({ 
        success: false, 
        message: "Skill not found or you don't have permission to delete it" 
      }, { status: 404 });
    }

    // Delete the skill
    await prisma.studentSkill.delete({
      where: { id: skillId }
    });

    return Response.json({ 
      success: true, 
      message: "Skill deleted successfully"
    });
  } catch (error) {
    console.error("Skill deletion error:", error);
    return Response.json({ 
      success: false, 
      message: "Error deleting skill",
      details: error.message
    }, { status: 500 });
  }
} 