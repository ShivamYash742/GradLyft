import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../utils/db';

export async function GET() {
  try {
    // Get the token from the cookie - using await to fix the error
    const cookieStore = await cookies();
    const token = cookieStore.get('gradlyft_token')?.value;
    
    if (!token) {
      return Response.json({ 
        authenticated: false,
        user: null 
      });
    }
    
    // Verify the token
    try {
      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
      
      // Fetch the user from the database
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: {
          student: true,
          employer: true
        }
      });
      
      if (!user) {
        return Response.json({ 
          authenticated: false,
          user: null 
        });
      }
      
      // Remove sensitive data
      const { password, ...userInfo } = user;
      
      return Response.json({
        authenticated: true,
        user: userInfo
      });
    } catch (tokenError) {
      // Token is invalid
      console.error('Token validation error:', tokenError);
      return Response.json({ 
        authenticated: false,
        user: null 
      });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return Response.json({ error: 'Authentication error' }, { status: 500 });
  }
} 