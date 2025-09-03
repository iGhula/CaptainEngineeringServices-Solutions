# Supabase Auth Security Settings

## Manual Configuration Required

The following settings need to be configured in your Supabase Dashboard under **Authentication > Settings**:

### 1. Enable Leaked Password Protection

**Location:** Authentication > Settings > Security

**Steps:**
1. Go to your Supabase Dashboard
2. Navigate to **Authentication** > **Settings**
3. Scroll to **Security** section
4. Enable **"Check for leaked passwords"**
5. Save changes

**Why:** This prevents users from using passwords that have been compromised in data breaches.

### 2. Enable Multi-Factor Authentication (MFA)

**Location:** Authentication > Settings > Security

**Steps:**
1. Go to your Supabase Dashboard
2. Navigate to **Authentication** > **Settings**
3. Scroll to **Security** section
4. Enable **"Enable phone confirmations"** (SMS-based MFA)
5. Enable **"Enable email confirmations"** (Email-based MFA)
6. Optionally enable **"Enable TOTP"** (Time-based One-Time Password)
7. Save changes

**Why:** MFA adds an extra layer of security beyond just passwords.

### 3. Additional Recommended Security Settings

**Location:** Authentication > Settings

**Recommended settings:**
- **Session timeout:** Set to 1 hour (3600 seconds)
- **Refresh token rotation:** Enable
- **Secure password requirements:** Enable
- **Email confirmation:** Enable for new signups
- **Phone confirmation:** Enable if using phone auth

## Database Migration Applied

The following database security issues have been fixed via migration:

✅ **Function Search Path Mutable** - Fixed by setting `search_path = ''` on all functions
✅ **Extension in Public** - Fixed by moving `http` extension to dedicated `extensions` schema
✅ **RLS Disabled** - Fixed by enabling RLS on all tables with proper policies

## Verification

After applying the migration and manual settings:

1. **Check Security Advisor** - Should show 0 errors and 0 warnings
2. **Test Registration** - Ensure user registration still works
3. **Test Admin Access** - Ensure admin dashboard still works
4. **Test Network Items** - Ensure website can still read network data

## Security Status Monitoring

You can check your security status anytime by running:

```sql
SELECT * FROM public.security_status;
```

This view will show you the current status of all security checks.
