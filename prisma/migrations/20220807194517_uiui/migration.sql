-- CreateTable
CREATE TABLE "Reply" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "PostId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
