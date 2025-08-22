import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rbbatwzygehpomsypkin.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmF0d3p5Z2VocG9tc3lwa2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjU1NTQsImV4cCI6MjA3MTIwMTU1NH0.GKBZZ2Y6aDL0TmdnTZ97-1OUOZNBiRyifmH0pTPXgUY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'captain-engineering-admin-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
})

// Test function to check database access
export const testDatabaseAccess = async () => {
  try {
    console.log('=== TESTING DATABASE ACCESS ===')
    
    // Test 1: Simple select from admin_users
    const { data: test1, error: error1 } = await supabase
      .from('admin_users')
      .select('count')
      .limit(1)
    
    console.log('Test 1 - Simple select:', { test1, error1 })
    
    // Test 2: Check if we can see the table structure
    const { data: test2, error: error2 } = await supabase
      .from('admin_users')
      .select('*')
      .limit(1)
    
    console.log('Test 2 - Table structure check:', { test2, error2 })
    
    // Test 3: Try to find our specific user
    const { data: test3, error: error3 } = await supabase
      .from('admin_users')
      .select('username, full_name')
      .eq('username', 'admin')
    
    console.log('Test 3 - Find specific user:', { test3, error3 })
    
    return { success: true, tests: { test1, test2, test3 } }
  } catch (error) {
    console.error('Database access test failed:', error)
    return { success: false, error }
  }
}

export const signIn = async (username: string, password: string) => {
  try {
    console.log('=== LOGIN ATTEMPT START ===')
    console.log('Attempting login with:', { username, password })
    console.log('Username length:', username.length)
    console.log('Password length:', password.length)
    
    // First, let's try to find the user without password check to see if the table is accessible
    console.log('Step 1: Checking if we can access the admin_users table...')
    const { data: userCheck, error: userCheckError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username.trim())
      .single()

    console.log('User check result:', { userCheck, userCheckError })

    if (userCheckError) {
      console.log('Error accessing admin_users table:', userCheckError)
      throw new Error(`Database access error: ${userCheckError.message}`)
    }

    if (!userCheck) {
      console.log('No user found with this username')
      throw new Error('Invalid username or password')
    }

    console.log('User found in database:', userCheck)
    console.log('Stored password hash:', userCheck.password_hash)
    console.log('Input password:', password.trim())
    console.log('Password match:', userCheck.password_hash === password.trim())

    // Now check if password matches
    if (userCheck.password_hash !== password.trim()) {
      console.log('Password does not match')
      throw new Error('Invalid username or password')
    }

    if (!userCheck.is_active) {
      console.log('User account is not active')
      throw new Error('Account is deactivated')
    }

    console.log('Authentication successful!')

    // Create a simple session object
    const session = {
      user: {
        id: userCheck.id,
        username: userCheck.username,
        email: userCheck.email,
        full_name: userCheck.full_name,
        is_admin: true
      }
    }

    // Store session in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('captain-engineering-admin-session', JSON.stringify(session))
      console.log('Session stored in localStorage:', session)
    }

    console.log('=== LOGIN ATTEMPT SUCCESS ===')
    return { data: { user: session.user }, error: null }
  } catch (error) {
    console.error('=== LOGIN ATTEMPT FAILED ===')
    console.error('Auth error:', error)
    return { data: null, error }
  }
}

export const signOut = async () => {
  try {
    // Clear the custom session
    if (typeof window !== 'undefined') {
      localStorage.removeItem('captain-engineering-admin-session')
    }
  } catch (error) {
    console.error('Sign out error:', error)
    throw error
  }
}

export const getSession = async () => {
  try {
    // Get session from localStorage
    if (typeof window !== 'undefined') {
      const sessionData = localStorage.getItem('captain-engineering-admin-session')
      if (sessionData) {
        return JSON.parse(sessionData)
      }
    }
    return null
  } catch (error) {
    console.error('Get session error:', error)
    return null
  }
}

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const sessionData = localStorage.getItem('captain-engineering-admin-session')
    return !!sessionData
  }
  return false
}
