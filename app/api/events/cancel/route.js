import { prisma } from "../../../utils/db";
import { authenticate } from "../../middleware";

export async function POST(req) {
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
    const data = await req.json();
    const { eventId } = data;

    if (!eventId) {
      return Response.json({ 
        success: false, 
        message: "Event ID is required" 
      }, { status: 400 });
    }

    // Verify the user is a student and get their student profile
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

    // Find the registration to cancel
    const registration = await prisma.eventRegistration.findUnique({
      where: {
        studentId_eventId: {
          studentId: studentId,
          eventId: String(eventId)
        }
      }
    });

    if (!registration) {
      return Response.json({ 
        success: false, 
        message: "Registration not found" 
      }, { status: 404 });
    }

    // Update registration status to CANCELLED
    await prisma.eventRegistration.update({
      where: {
        id: registration.id
      },
      data: {
        status: "CANCELLED",
        cancelledAt: new Date()
      }
    });

    // Decrement attendee count
    await prisma.event.update({
      where: { id: String(eventId) },
      data: { attendees: { decrement: 1 } }
    });

    // Record analytics
    const ipAddress = req.headers.get("x-forwarded-for") || 
                      req.headers.get("x-real-ip") || 
                      "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    
    await prisma.userSession.create({
      data: {
        userId,
        page: `/events/${eventId}`,
        action: "EVENT_CANCELLATION",
        ipAddress,
        userAgent,
        startedAt: new Date(),
        duration: 0
      }
    });

    return Response.json({
      success: true,
      message: "Registration cancelled successfully"
    });
  } catch (error) {
    console.error("Event cancellation error:", error);
    return Response.json({ 
      success: false, 
      message: "Server error during cancellation",
      details: error.message
    }, { status: 500 });
  }
} 