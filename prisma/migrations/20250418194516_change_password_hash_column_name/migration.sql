/*
  Warnings:

  - You are about to drop the column `password_hashed` on the `users` table. All the data in the column will be lost.
  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password_hashed",
ADD COLUMN     "password_hash" TEXT NOT NULL;
