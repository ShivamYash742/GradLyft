# GradLyft - Student Career Platform

GradLyft is a comprehensive Next.js application designed to connect students with career opportunities, universities, and employers. It provides a platform for students to discover events, gain skills, and build their professional network.

![GradLyft Platform](https://placeholder-for-gradlyft-screenshot.com)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Configuration](#environment-configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration for students, employers, and university representatives
- **Event Management**: Browse, register, and manage event participation
- **Career Opportunities**: Access to internships, jobs, and other professional opportunities
- **University Partnerships**: Connect with universities and educational resources
- **Profile Building**: Create and enhance professional profiles
- **Mentorship**: Connect with mentors in various fields
- **Interactive Dashboard**: Personalized dashboard for tracking progress and opportunities
- **Responsive Design**: Optimized for desktop and mobile devices

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth/JWT
- **Styling**: TailwindCSS with custom theme support
- **Deployment**: Vercel/Netlify/AWS (options)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL (v12+)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/gradlyft.git
cd gradlyft
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

### Database Setup

1. Make sure PostgreSQL is installed and running.

2. Create a new database:
```bash
createdb -U postgres gradlyft_db
```

> If `createdb` doesn't work, create the database manually via pgAdmin or psql with:
> ```sql
> CREATE DATABASE gradlyft_db;
> ```

### Environment Configuration

1. Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://postgres:<your_password>@localhost:5432/gradlyft_db"

# Authentication
NEXTAUTH_SECRET="your_super_secret_string"   # Generate with: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# Optional: Email (for password recovery)
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@gradlyft.com

# Optional: Third-party OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

- Replace `<your_password>` with your actual PostgreSQL password.
- Generate a secure NEXTAUTH_SECRET with: `openssl rand -base64 32`

### Running the Application

1. Set up the database schema:
```bash
npx prisma format
npx prisma generate
npx prisma migrate dev --name init
```

2. Seed the database with initial data (optional):
```bash
npm run seed
# or
node prisma/seed.js
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Prisma Studio (DB GUI): [http://localhost:5555](http://localhost:5555) (run with `npx prisma studio`)

## Project Structure

```
gradlyft/
├── app/               # Next.js app router pages and API routes
│   ├── api/           # Backend API endpoints
│   ├── admin/         # Admin portal pages
│   ├── student/       # Student-facing pages
│   ├── employer/      # Employer-facing pages
│   └── ...            # Other pages
├── components/        # Reusable React components
├── lib/               # Utility functions and helpers
├── prisma/            # Database schema and migrations
│   └── schema.prisma  # Prisma schema file
├── public/            # Static assets
└── scripts/           # Helper scripts
```

## User Roles

GradLyft supports three primary user roles:

1. **Student**: Access events, career opportunities, and educational resources
2. **Employer**: Post jobs, connect with student talent, and manage applications
3. **Admin**: Platform management and oversight

### Test Credentials

You can test the system with the following credentials:

- **Student**: `student@example.com` / `password123`
- **Employer**: `employer@example.com` / `password123`
- **Admin**: `admin@gradlyft.com` / `password123`

## API Documentation

### Authentication

#### Signup

```
POST /api/signup
```

Sample payloads:

**Admin**
```json
{
  "email": "admin@gradlyft.com",
  "password": "admin123",
  "role": "ADMIN",
  "employer": { "name": "Admin", "company": "Gradlyft", "designation": "CTO" }
}
```

**Employer**
```json
{
  "email": "employer@gradlyft.com",
  "password": "employer123",
  "role": "EMPLOYER",
  "employer": { "name": "John Doe", "company": "Acme", "designation": "Manager" }
}
```

**Student**
```json
{
  "email": "student@gradlyft.com",
  "password": "student123",
  "role": "STUDENT",
  "student": {
    "name": "Jane Student",
    "college": "ABC University",
    "degree": "B.Tech",
    "year": 2025,
    "interests": "AI, Web Dev",
    "cvUrl": "https://example.com/cv.pdf"
  }
}
```

#### Login (Token-Based)

```
POST /api/token
```

Payload:
```json
{
  "email": "employer@gradlyft.com",
  "password": "employer123"
}
```

### Event System

- `POST /api/events/register`: Register for an event
- `POST /api/events/cancel`: Cancel an event registration
- `GET /api/events/status`: Check registration status for an event

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy!

### Traditional Deployment

1. Build the application
```bash
npm run build
```

2. Start the production server
```bash
npm start
```

## Troubleshooting

### Database Connection Issues

- Verify that PostgreSQL is running
- Check your DATABASE_URL in the .env file
- Ensure your database user has proper permissions
- Try connecting with psql or another PostgreSQL client

### Prisma Errors

- Run `npx prisma generate` to update the Prisma client
- Run `npx prisma db push` to update the database schema
- Check for mismatches between your schema and database

### Authentication Problems

- Verify NEXTAUTH_SECRET is set correctly
- Clear browser cookies and try again
- Check for API errors in the browser console

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
