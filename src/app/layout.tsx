import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keep-it here: Save content safely!',
  description: 'Original By Nikhil Sharma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  )
}
