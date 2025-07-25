// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kdidvhhfwdcuptysvzqm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkaWR2aGhmd2RjdXB0eXN2enFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMDI1NjgsImV4cCI6MjA2ODc3ODU2OH0.BhBsG2mmcatKhCnE7DuqveCZhmPHaumlL0olv5NKhNk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});