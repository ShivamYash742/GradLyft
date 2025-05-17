const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed process...');

  // Create test users
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gradlyft.com' },
    update: {},
    create: {
      email: 'admin@gradlyft.com',
      password: hashedPassword,
      role: 'ADMIN',
    }
  });

  console.log('Admin user created:', admin.id);

  // Create student user
  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      password: hashedPassword,
      role: 'STUDENT',
      student: {
        create: {
          name: 'John Student',
          college: 'Test University',
          degree: 'Computer Science',
          year: 2023,
          interests: 'Technology, AI',
        }
      }
    },
    include: {
      student: true
    }
  });

  console.log('Student user created:', student.id);

  // Create employer user
  const employer = await prisma.user.upsert({
    where: { email: 'employer@example.com' },
    update: {},
    create: {
      email: 'employer@example.com',
      password: hashedPassword,
      role: 'EMPLOYER',
      employer: {
        create: {
          name: 'Jane Employer',
          company: 'Test Corp',
          designation: 'HR Manager',
        }
      }
    }
  });

  console.log('Employer user created:', employer.id);
  
  // Create events
  const events = [
    {
      title: "Tech Career Fair 2024",
      description: "Connect with top tech companies looking to hire fresh graduates and interns.",
      longDescription: "<p>Join us for the biggest technology career fair of the year! This two-day event brings together over 100 leading technology companies from around the world, all actively looking to recruit talented graduates and students.</p><p>The event will feature:</p><ul><li>One-on-one meetings with recruiters</li><li>On-the-spot interviews for qualified candidates</li><li>Resume review sessions by HR professionals</li><li>Panel discussions on careers in technology</li><li>Networking opportunities with industry professionals</li><li>Virtual participation options for those who cannot attend in person</li></ul>",
      date: new Date('2024-06-15'),
      endDate: new Date('2024-06-16'),
      time: "10:00 AM - 4:00 PM",
      location: "Virtual & San Francisco Convention Center",
      address: "747 Howard St, San Francisco, CA 94103",
      organizer: "GradLyft & Tech Industry Association",
      attendees: 230,
      category: "CAREER_FAIR",
      format: "HYBRID",
      image: "/images/career-fair.jpg",
      agenda: JSON.stringify([
        { time: "10:00 AM", activity: "Opening Ceremony" },
        { time: "10:30 AM", activity: "Company Booths Open" },
        { time: "12:00 PM", activity: "Lunch & Networking" },
        { time: "1:30 PM", activity: "Panel Discussion" },
        { time: "3:00 PM", activity: "Resume Workshop" }
      ]),
      sponsors: JSON.stringify([
        { name: "TechCorp", logo: "/sponsors/techcorp.png" },
        { name: "InnovateSoft", logo: "/sponsors/innovatesoft.png" }
      ])
    },
    {
      title: "Resume Workshop",
      description: "Learn how to craft a resume that stands out to recruiters.",
      longDescription: "<p>Build a professional resume that gets you noticed by hiring managers.</p><p>In this workshop, you'll learn:</p><ul><li>The essential sections every resume should have</li><li>How to highlight your achievements</li><li>Tailoring your resume for specific job applications</li><li>Common resume mistakes to avoid</li></ul>",
      date: new Date('2024-06-22'),
      time: "3:00 PM - 5:00 PM",
      location: "Campus Center",
      address: "123 University Ave, Berkeley, CA 94704",
      organizer: "GradLyft Career Center",
      attendees: 85,
      category: "WORKSHOP",
      format: "IN_PERSON",
      image: "/images/resume-workshop.jpg"
    },
    {
      title: "Interview Skills Webinar",
      description: "Master the art of technical and behavioral interviews.",
      longDescription: "<p>Prepare for your upcoming interviews with expert guidance.</p><p>Topics covered:</p><ul><li>Common interview questions and how to answer them</li><li>Body language and communication tips</li><li>Technical interview strategies</li><li>Follow-up etiquette</li></ul>",
      date: new Date('2024-06-30'),
      time: "5:00 PM - 6:30 PM",
      location: "Virtual",
      organizer: "GradLyft",
      attendees: 120,
      category: "WEBINAR",
      format: "VIRTUAL",
      image: "/images/interview-skills.jpg"
    }
  ];
  
  for (const eventData of events) {
    const event = await prisma.event.create({
      data: eventData
    });
    console.log(`Created event: ${event.title}`);
  }

  console.log('Seed completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error during seeding:', e);
    await prisma.$disconnect();
    process.exit(1);
  }); 