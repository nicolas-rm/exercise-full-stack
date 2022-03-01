import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';


export type Conectex = {
    prisma: PrismaClient;
};


export async function createContext(req: any, res: any) {
    return {
        prisma
    };
};