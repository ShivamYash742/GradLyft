// Run with: node scripts/create-admin.js admins.json
// Example admins.json:
// [
//   { "email": "admin1@gradlyft.com", "password": "password1" },
//   { "email": "admin2@gradlyft.com", "password": "password2" }
// ]

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const prisma = new PrismaClient();

async function createOrUpdateAdmin(email, password) {
  try {
    console.log(`Processing admin user with email: ${email}`);
    
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
        console.log(`Updated user ${email} to ADMIN Role.`);
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
    console.error(`Error processing admin user ${email}:`, error);
  }
}

async function main() {
  try {
    const adminJsonPath = process.argv[2];
    
    if (!adminJsonPath) {
      console.error('Please provide the path to admins.json file');
      console.error('Usage: node scripts/create-admin.js admins.json');
      process.exit(1);
    }

    // Read and parse the JSON file
    const adminsData = JSON.parse(fs.readFileSync(adminJsonPath, 'utf8'));

    if (!Array.isArray(adminsData)) {
      throw new Error('Invalid JSON format. Expected an array of admin objects.');
    }

    // Process each admin in sequence
    for (const admin of adminsData) {
      if (!admin.email || !admin.password) {
        console.error('Skipping invalid admin entry:', admin);
        continue;
      }
      await createOrUpdateAdmin(admin.email, admin.password);
    }

  } catch (error) {
    console.error('Error processing admin users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 