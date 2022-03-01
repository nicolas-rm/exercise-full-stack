
export const resolvers = {
    Query: {
        restaurants: () => [
            {
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
                }
            }
        ]
    }
}