import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Não conferi se daqui para baixo será utilizado.
async function main() {
	// ... you will write your Prisma Client queries here
	/* const allUsers = await prisma.user.findMany();
	console.log(allUsers); */
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
