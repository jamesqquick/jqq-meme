/*
  Warnings:

  - Made the column `stripeId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "stripeId" SET NOT NULL;
