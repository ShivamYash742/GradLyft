import { prisma } from "../../../utils/db";
import { checkAdminAuth } from "../../../utils/adminAuth";

export async function GET(req) {
  try {
    // Check admin authorization
    const authCheck = await checkAdminAuth();
    if (!authCheck.authorized) {
      return Response.json({ 
        success: false, 
        message: authCheck.message 
      }, { status: 401 });
    }

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    const userId = searchParams.get('userId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Build filter conditions
    const where = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (startDate || endDate) {
      where.startedAt = {};
      if (startDate) {
        where.startedAt.gte = new Date(startDate);
      }
      if (endDate) {
        where.startedAt.lte = new Date(endDate);
      }
    }

    // Get total count
    const totalCount = await prisma.userSession.count({ where });
    
    // Fetch sessions with user information
    const sessions = await prisma.userSession.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            student: {
              select: {
                name: true
              }
            },
            employer: {
              select: {
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        startedAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return Response.json({
      success: true,
      data: {
        sessions,
        pagination: {
          total: totalCount,
          page,
          limit,
          pages: Math.ceil(totalCount / limit)
        }
      }
    });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return Response.json({ 
      success: false,
      message: "Server error while fetching sessions"
    }, { status: 500 });
  }
} 