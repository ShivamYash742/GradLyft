-- CreateEnum
CREATE TYPE "WorkingStatus" AS ENUM ('FRESHER', 'PROFESSIONAL');

-- AlterTable
ALTER TABLE "StudentProfile" ADD COLUMN     "aspiration" TEXT,
ADD COLUMN     "branch" TEXT NOT NULL DEFAULT 'Not specified',
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "phoneNo" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "workingStatus" "WorkingStatus" NOT NULL DEFAULT 'FRESHER';
