import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xhksgzkezbqzmqnsmbft.supabase.co";
const supabaseKey: string = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
