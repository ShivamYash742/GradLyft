// Run with: node scripts/create-admin.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  try {
    // Default admin credentials
    const email = process.argv[2] || 'admin@gradlyft.com';
    const password = process.argv[3] || '12345678';
    
    console.log(`Creating/updating admin user with email: ${email}`);
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists.`);
      
      // Update to admin role if not already admin
      if (existingUser.role !== 'ADMIN') {
        await prisma.user.update({
          where: { id: existingUser.id },
          data: { role: 'ADMIN' }
        });
        console.log(`Updated user ${email} to ADMIN Role..`);
      } else {
        console.log(`User ${email} is already an admin.`);
      }
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create the admin user
      const newAdmin = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: 'ADMIN',
        }
      });
      
      console.log(`Created new admin user: ${newAdmin.email}`);
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 