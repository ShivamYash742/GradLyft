import { prisma } from "../../utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, password } = data;

    if (!email || !password) {
      return Response.json({ 
        success: false,
        message: "Email and password are required" 
      }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        student: true,
        employer: true
      }
    });

    if (!user) {
      return Response.json({ 
        success: false,
        message: "Invalid credentials" 
      }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return Response.json({ 
        success: false,
        message: "Invalid credentials" 
      }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role
      },
      process.env.NEXTAUTH_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    cookies().set("gradlyft_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/"
    });

    // Return user info (excluding password)
    const { password: _, ...userInfo } = user;
    
    return Response.json({
      success: true,
      user: userInfo,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ 
      success: false,
      message: "Server error during login" 
    }, { status: 500 });
  }
} 