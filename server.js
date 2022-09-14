import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://xvgkbvdjxvwaamvcuvtr.supabase.co", process.env.NEXT_PUBLIC_ANON_KEY)