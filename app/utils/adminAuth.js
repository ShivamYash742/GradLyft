import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { prisma } from './db';

export async function checkAdminAuth() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('gradlyft_token')?.value;
    
    if (!token) {
      return { authorized: false, message: 'Not authenticated' };
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    
    // Check if user exists and is admin
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });
    
    if (!user || user.role !== 'ADMIN') {
      return { authorized: false, message: 'Not authorized as admin' };
    }
    
    return { authorized: true, user };
  } catch (error) {
    console.error('Admin auth error:', error);
    return { authorized: false, message: 'Authentication error' };
  }
} 