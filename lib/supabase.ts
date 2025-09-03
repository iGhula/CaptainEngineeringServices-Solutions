import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rbbatwzygehpomsypkin.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmF0d3p5Z2VocG9tc3lwa2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjU1NTQsImV4cCI6MjA3MTIwMTU1NH0.GKBZZ2Y6aDL0TmdnTZ97-1OUOZNBiRyifmH0pTPXgUY'

// Service role key for admin operations (bypasses RLS)
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmF0d3p5Z2VocG9tc3lwa2luIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTYyNTU1NCwiZXhwIjoyMDcxMjAxNTU0fQ.YourServiceKeyHere'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'captain-engineering-admin-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
})

// Service role client for admin operations (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
})