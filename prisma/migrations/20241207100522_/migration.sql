/*
  Warnings:

  - A unique constraint covering the columns `[propertyId]` on the table `PropertyImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PropertyImage_propertyId_key" ON "PropertyImage"("propertyId");
