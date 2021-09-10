import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getMemes = async () => {
    return await prisma.meme.findMany();
};

export const createMeme = async (data) => {
    return prisma.meme.create({
        data,
    });
};

export const getUser = async (userId) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
};

export const createUser = async ({ id, stripeId }) => {
    return prisma.user.create({
        data: {
            id,
            stripeId,
            twitterHandle: 'something',
        },
    });
};

export const updateUserToPremium = async ({ id }) => {
    return prisma.user.update({
        where: {
            id,
        },
        data: {
            isPremium: true,
        },
    });
};
