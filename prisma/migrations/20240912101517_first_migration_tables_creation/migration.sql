-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkuserid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageurl" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkuserid_key" ON "User"("clerkuserid");

-- CreateIndex
CREATE INDEX "Transaction_userid_idx" ON "Transaction"("userid");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("clerkuserid") ON DELETE CASCADE ON UPDATE CASCADE;
