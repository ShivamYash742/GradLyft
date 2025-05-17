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
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Build filter conditions
    const where = {};
    
    if (startDate || endDate) {
      where.startedAt = {};
      if (startDate) {
        where.startedAt.gte = new Date(startDate);
      }
      if (endDate) {
        where.startedAt.lte = new Date(endDate);
      }
    }

    // Get total sessions
    const totalSessions = await prisma.userSession.count({ where });
    
    // Calculate average duration (exclude sessions with 0 duration)
    const durationData = await prisma.$queryRaw`
      SELECT AVG(duration) as averageDuration
      FROM "UserSession"
      WHERE duration > 0
      ${startDate ? `AND "startedAt" >= '${startDate}'` : ''}
      ${endDate ? `AND "startedAt" <= '${endDate}'` : ''}
    `;
    
    const averageDuration = Math.round(durationData[0]?.averageDuration || 0);
    
    // Count unique users who had a session
    const activeUsers = await prisma.userSession.groupBy({
      by: ['userId'],
      where: {
        ...where,
        userId: { not: null }
      },
      _count: true
    });
    
    // Find top pages
    const topPages = await prisma.userSession.groupBy({
      by: ['page'],
      where,
      _count: {
        page: true
      },
      orderBy: {
        _count: {
          page: 'desc'
        }
      },
      take: 5
    });
    
    // Format top pages data
    const formattedTopPages = topPages.map(item => ({
      page: item.page,
      count: item._count.page
    }));

    return Response.json({
      success: true,
      data: {
        totalSessions,
        averageDuration,
        activeUsers: activeUsers.length,
        topPages: formattedTopPages
      }
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return Response.json({ 
      success: false,
      message: "Server error while fetching analytics"
    }, { status: 500 });
  }
} 