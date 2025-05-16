import { checkAdminAuth } from "../../../utils/adminAuth";

export async function GET() {
  try {
    const authCheck = await checkAdminAuth();
    
    if (authCheck.authorized) {
      return Response.json({
        success: true,
        message: "User is authorized as admin"
      });
    } else {
      return Response.json({
        success: false,
        message: authCheck.message
      }, { status: 403 });
    }
  } catch (error) {
    console.error("Admin verification error:", error);
    return Response.json({
      success: false,
      message: "Server error during admin verification"
    }, { status: 500 });
  }
} 