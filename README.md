# Gradlyft

This is a [Next.js](https://nextjs.org) project with integrated backend and frontend for the Gradlyft application.

## Getting Started

### 1. Set Up PostgreSQL Database

Make sure PostgreSQL is installed and running.

Create a new database:

```bash
createdb -U postgres gradlyft_db
```

> If `createdb` doesn't work, create the database manually via pgAdmin or psql.

### 2. Configure Environment Variables

Create a `.env` file in the root directory with:

```env
DATABASE_URL="postgresql://postgres:<your_password>@localhost:5432/gradlyft_db"
NEXTAUTH_SECRET="your_super_secret_string"   # openssl rand -base64 32
```

- Replace `<your_password>` with your actual PostgreSQL password.
- To create your NEXTAUTH_SECRET, use this command: `openssl rand -base64 32`

### 3. Install Dependencies

```bash
npm install
```

### 4. Prisma Setup

```bash
npx prisma format
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

### Signup

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

### Login (Token-Based)

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

## Database Tools

- **Reset DB**:
```bash
npx prisma migrate reset
```

- **Prisma Studio (GUI)**:
```bash
npx prisma studio
```
Accessible at http://localhost:5555

## Event Registration System

The event registration system allows students to:

1. Browse upcoming events
2. View detailed event information
3. Register for events with a comprehensive form
4. Cancel registrations when needed

### Database Schema

The system uses the following models:

- `Event`: Stores event information including title, description, date/time, location, etc.
- `EventRegistration`: Records each student registration with their contact information and preferences

### API Endpoints

- `POST /api/events/register`: Register for an event
- `POST /api/events/cancel`: Cancel an event registration
- `GET /api/events/status`: Check registration status for an event

### Technical Implementation

- Secure authentication using JWT
- Database persistence with Prisma ORM
- Comprehensive error handling
- Real-time status updates
- Analytics tracking

## Test Credentials

You can test the system with the following credentials:

- Student: `student@example.com` / `password123`
- Employer: `employer@example.com` / `password123`
- Admin: `admin@gradlyft.com` / `password123`
