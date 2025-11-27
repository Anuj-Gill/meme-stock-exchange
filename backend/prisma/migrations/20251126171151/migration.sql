/*
  Warnings:

  - You are about to drop the `Symbol` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Symbol";

-- CreateTable
CREATE TABLE "symbols" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "symbol" TEXT NOT NULL,
    "last_trade_price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "symbols_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "symbols_symbol_key" ON "symbols"("symbol");
