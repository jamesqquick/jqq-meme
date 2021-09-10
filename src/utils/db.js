import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMemes = async () => prisma.meme.findMany();

export const createMeme = async (data) =>
  prisma.meme.create({
    data,
  });

export const getUser = async (userId) =>
  prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

export const createUser = async ({ id, stripeId, twitterHandle }) =>
  prisma.user.create({
    data: {
      id,
      stripeId,
      twitterHandle,
    },
  });

export const updateUserToPremium = async ({ id }) =>
  prisma.user.update({
    where: {
      id,
    },
    data: {
      isPremium: true,
    },
  });
