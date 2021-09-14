import { createClient } from '@supabase/supabase-js';

export const getSupabase = (token) => {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_BUCKET,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  if (token) {
    client.auth.session = () => ({
      access_token: token,
    });
  }
  return client;
};
