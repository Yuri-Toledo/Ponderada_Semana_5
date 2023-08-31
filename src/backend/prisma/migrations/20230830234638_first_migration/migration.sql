-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprego" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "salario" INTEGER NOT NULL,

    CONSTRAINT "Emprego_pkey" PRIMARY KEY ("id")
);
