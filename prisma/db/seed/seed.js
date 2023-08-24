const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@teste.com" },
    update: {},
    create: {
      email: "admin@reservei.com",
      senha: "$2a$10$i3vF7YAgOOrsZ0QaGwNHru11Ztm7mHmUln1o88gNRSDRxmpQ3Bdpm", // senha admin1234
    },
  });

  prisma.cliente.create({
    data: {
      name,
      cliente
    }
  })

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
