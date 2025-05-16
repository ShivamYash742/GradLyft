import { cookies } from 'next/headers';
import { authenticate } from '../../middleware';
import { prisma } from '../../../utils/db';

export async function POST(req) {
  try {
    // Get user information before logout
    const authResult = await authenticate();
    const userId = authResult.authenticated ? authResult.user.id : null;
    
    if (userId) {
      // Record logout session
      const ipAddress = req.headers.get("x-forwarded-for") || 
                        req.headers.get("x-real-ip") || 
                        "unknown";
      const userAgent = req.headers.get("user-agent") || "unknown";
      
      await prisma.userSession.create({
        data: {
          userId,
          page: "/logout",
          action: "USER_LOGOUT",
          ipAddress,
          userAgent,
          startedAt: new Date(),
          duration: 0
        }
      });
    }
    
    // Clear the authentication cookie
    cookies().delete('gradlyft_token');
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json({ error: 'Logout failed' }, { status: 500 });
  }
} 