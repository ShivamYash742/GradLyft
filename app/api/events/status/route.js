import { prisma } from "../../../utils/db";
import { authenticate } from "../../middleware";

export async function GET(req) {
  try {
    // Get auth status
    const authResult = await authenticate();
    
    if (!authResult.authenticated) {
      return Response.json({ 
        success: false, 
        message: "Authentication required" 
      }, { status: 401 });
    }

    const userId = authResult.user.id;
    const url = new URL(req.url);
    const eventId = url.searchParams.get("eventId");

    if (!eventId) {
      return Response.json({ 
        success: false, 
        message: "Event ID is required" 
      }, { status: 400 });
    }

    // Get the student profile
    const userWithProfile = await prisma.user.findUnique({
      where: { id: userId },
      include: { student: true }
    });

    if (!userWithProfile || !userWithProfile.student) {
      return Response.json({ 
        success: false, 
        message: "Student profile not found" 
      }, { status: 404 });
    }

    const studentId = userWithProfile.student.id;

    // Find registration for this event
    const registration = await prisma.eventRegistration.findUnique({
      where: {
        studentId_eventId: {
          studentId: studentId,
          eventId: String(eventId)
        },
      }
    });

    return Response.json({
      success: true,
      registered: !!registration && registration.status === "CONFIRMED",
      registration: registration ? {
        id: registration.id,
        registeredAt: registration.registeredAt,
        status: registration.status
      } : null
    });
  } catch (error) {
    console.error("Registration status check error:", error);
    return Response.json({ 
      success: false, 
      message: "Server error during status check",
      details: error.message
    }, { status: 500 });
  }
} 