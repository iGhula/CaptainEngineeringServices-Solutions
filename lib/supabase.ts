import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rbbatwzygehpomsypkin.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmF0d3p5Z2VocG9tc3lwa2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjU1NTQsImV4cCI6MjA3MTIwMTU1NH0.GKBZZ2Y6aDL0TmdnTZ97-1OUOZNBiRyifmH0pTPXgUY'

// Export a function to get a new Supabase client instance
export const getSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
}

// Initialize the Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Export a function to get the current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) throw error
    return session
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}