/** @type {import('next').NextConfig} */
const nextConfig = {
  telemetry: false,
  experimental: {
    instrumentationHook: false
  }
}

export default nextConfig