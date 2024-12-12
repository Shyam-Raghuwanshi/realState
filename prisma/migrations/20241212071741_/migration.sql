/*
  Warnings:

  - You are about to drop the column `url` on the `PropertyImage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PropertyImage" DROP COLUMN "url",
ADD COLUMN     "urls" TEXT[];
