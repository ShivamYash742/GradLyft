// This file contains authentication options used by various API endpoints
import { prisma } from "../../../utils/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// Helper function to get user session from JWT token
export async function getSession() {
  try {
    // Access cookies
    const token = cookies().get('gradlyft_token')?.value;
    
    if (!token) {
      return null;
    }
    
    // Verify the token
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
      return null;
    }
    
    // Return session-like object that matches getServerSession format
    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    };
  } catch (error) {
    console.error('Session validation error:', error);
    return null;
  }
}

// Define authentication options that can be imported by API routes
export const authOptions = {};

// Polyfill for getServerSession that works with our custom JWT auth
export async function getServerSession() {
  return await getSession();
}

// Route handlers required by Next.js when using [...nextauth]
export async function GET() {
  return new Response("Auth endpoint", { status: 200 });
}

export async function POST() {
  return new Response("Auth endpoint", { status: 200 });
} 