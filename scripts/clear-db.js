const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    console.log('Starting database cleanup...');

    // Delete data in the correct order to respect foreign key constraints
    await prisma.bookmark.deleteMany();
    await prisma.eventRegistration.deleteMany();
    await prisma.studentSkill.deleteMany();
    await prisma.userSession.deleteMany();
    await prisma.job.deleteMany();
    await prisma.event.deleteMany();
    await prisma.upskillingResource.deleteMany();
    await prisma.employerProfile.deleteMany();
    await prisma.professionalProfile.deleteMany();
    await prisma.studentProfile.deleteMany();
    await prisma.user.deleteMany();

    console.log('Successfully cleared all data from the database.');
  } catch (error) {
    console.error('Error clearing database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase(); 