export const appConst = {
  NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET || '',
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',
  NEXT_PUBLIC_BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '',
} as const;
