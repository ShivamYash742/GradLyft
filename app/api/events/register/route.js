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
    const { eventId, name, email, phone, interests, requirements, resume } = data;

    if (!eventId || !name || !email) {
      return Response.json({ 
        success: false, 
        message: "Missing required fields" 
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

    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { id: String(eventId) }
    });

    if (!event) {
      return Response.json({ 
        success: false, 
        message: "Event not found" 
      }, { status: 404 });
    }

    // Check if user is already registered for the event
    const existingRegistration = await prisma.eventRegistration.findUnique({
      where: {
        studentId_eventId: {
          studentId: studentId,
          eventId: String(eventId)
        }
      }
    });

    if (existingRegistration) {
      return Response.json({ 
        success: false, 
        message: "You are already registered for this event" 
      }, { status: 400 });
    }

    // Store registration in database
    const registration = await prisma.eventRegistration.create({
      data: {
        studentId,
        eventId: String(eventId),
        name,
        email,
        phone: phone || "",
        interests: interests || "",
        requirements: requirements || "",
        resumeUrl: resume ? "/uploads/resumes/placeholder.pdf" : "", // In a real app, handle file uploads separately
        registeredAt: new Date(),
        status: "CONFIRMED"
      }
    });

    // Update event attendee count
    await prisma.event.update({
      where: { id: String(eventId) },
      data: { attendees: { increment: 1 } }
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
        action: "EVENT_REGISTRATION",
        ipAddress,
        userAgent,
        startedAt: new Date(),
        duration: 0
      }
    });

    return Response.json({
      success: true,
      message: "Registration successful",
      registrationId: registration.id
    });
  } catch (error) {
    console.error("Event registration error:", error);
    return Response.json({ 
      success: false, 
      message: "Server error during registration",
      details: error.message
    }, { status: 500 });
  }
} 