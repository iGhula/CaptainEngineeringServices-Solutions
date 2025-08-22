/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean configuration without deprecated options
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rbbatwzygehpomsypkin.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig