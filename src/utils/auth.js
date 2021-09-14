import jwt from 'jsonwebtoken';

export const createSupabaseToken = (userId) =>
  jwt.sign({ userId }, process.env.SUPABASE_SIGNING_SECRET);
