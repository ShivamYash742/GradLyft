/*
  Warnings:

  - The values [CAMPUS_AMBASSADOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `CampusAmbassador` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('STUDENT', 'EMPLOYER', 'PROFESSIONAL', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "CampusAmbassador" DROP CONSTRAINT "CampusAmbassador_userId_fkey";

-- DropTable
DROP TABLE "CampusAmbassador";

-- DropEnum
DROP TYPE "AmbassadorStatus";
