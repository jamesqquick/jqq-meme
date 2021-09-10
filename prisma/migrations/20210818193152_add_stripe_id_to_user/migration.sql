/*
  Warnings:

  - A unique constraint covering the columns `[stripeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User.stripeId_unique" ON "User"("stripeId");
