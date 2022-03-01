/* import prisma from '../lib/prisma'; */
export const resolvers = {
    Query: {
        restaurants: async (_parent: any, _args: any, ctx: any) => await ctx.prisma.restaurants.findMany()
    }
}