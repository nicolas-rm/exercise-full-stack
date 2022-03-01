// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

    if (await prisma.restaurants.count() === 0) {
        await prisma.restaurants.create({
            data: {
                name: "El Corazon de Chiapas",
                adress: "Seccion San Nicolas, M. Nuevo Leon.",
                id: "8a9020b2-363b-4a4f-ad26-d6d55b51bqes",
                phone: "XX-XXXX-XXXX",
                menu: {
                    create: {
                        name: "breakfast",
                        id: "8a9020b2-122d-465v-ad26-d6d55b51bqes",
                        restaurant: '8a9020b2-363b-4a4f-ad26-d6d55b51bqes',
                        typeMenu: 'meat_and_chicken'
                    }
                },
            },

        });
    }

    if (await prisma.menus.count() === 0) {
        await prisma.menus.create({
            data: {
                name: "dinner",
                id: "8a9020b2-4232-9876-a121-d6d55b51bqes",
                restaurant: '8a9020b2-363b-4a4f-ad26-d6d55b51bqes',
                typeMenu: 'vegans'
            }
        });
    }
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})