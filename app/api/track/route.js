import { prisma } from "../../utils/db";
import { authenticate } from "../middleware";

export async function POST(req) {
  try {
    const data = await req.json();
    const { page, action, duration } = data;
    
    if (!page || !action) {
      return new Response("Missing required fields", { status: 400 });
    }
    
    const authResult = await authenticate();
    const userId = authResult.authenticated ? authResult.user.id : null;
    
    // Get client information
    const ipAddress = req.headers.get("x-forwarded-for") || 
                    req.headers.get("x-real-ip") || 
                    "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    
    // Create user session record
    const session = await prisma.userSession.create({
      data: {
        userId,
        page,
        action,
        duration,
        ipAddress,
        userAgent,
        startedAt: new Date(),
        endedAt: duration ? new Date(Date.now() + duration * 1000) : null
      }
    });
    
    return Response.json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error("Session tracking error:", error);
    return new Response("Server error during session tracking", { status: 500 });
  }
} 