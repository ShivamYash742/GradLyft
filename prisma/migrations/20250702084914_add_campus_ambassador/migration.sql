-- CreateEnum
CREATE TYPE "AmbassadorStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'ACTIVE', 'INACTIVE');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'CAMPUS_AMBASSADOR';

-- CreateTable
CREATE TABLE "CampusAmbassador" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "course" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "whatsappNo" TEXT NOT NULL,
    "linkedinProfile" TEXT,
    "collegeCity" TEXT NOT NULL,
    "collegeState" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,
    "referrals" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "status" "AmbassadorStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampusAmbassador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampusAmbassador_userId_key" ON "CampusAmbassador"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CampusAmbassador_referralCode_key" ON "CampusAmbassador"("referralCode");

-- AddForeignKey
ALTER TABLE "CampusAmbassador" ADD CONSTRAINT "CampusAmbassador_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
