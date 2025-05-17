/*
  Warnings:

  - You are about to drop the column `mode` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId,eventId]` on the table `EventRegistration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `EventRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `EventRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'WAITLISTED');

-- CreateEnum
CREATE TYPE "EventFormat" AS ENUM ('VIRTUAL', 'IN_PERSON', 'HYBRID');

-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('CAREER_FAIR', 'WORKSHOP', 'NETWORKING', 'WEBINAR', 'PANEL', 'HACKATHON', 'CONFERENCE', 'OTHER');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "mode",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "agenda" JSONB,
ADD COLUMN     "attendees" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "category" "EventCategory" NOT NULL DEFAULT 'OTHER',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "format" "EventFormat" NOT NULL DEFAULT 'VIRTUAL',
ADD COLUMN     "image" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "longDescription" TEXT,
ADD COLUMN     "organizer" TEXT,
ADD COLUMN     "sponsors" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "EventRegistration" ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "interests" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "requirements" TEXT,
ADD COLUMN     "resumeUrl" TEXT,
ADD COLUMN     "status" "RegistrationStatus" NOT NULL DEFAULT 'CONFIRMED';

-- CreateIndex
CREATE UNIQUE INDEX "EventRegistration_studentId_eventId_key" ON "EventRegistration"("studentId", "eventId");
