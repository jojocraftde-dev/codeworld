import './globals.css'
import { cn } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Inter, Audiowide } from 'next/font/google'
import { ParticlesBackground } from '@/components/particles-background'
import { NavigationProgress } from '@/components/navigation-progress'
import { Layout } from '@/components/layout'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Code World',
  description: 'Share your coding projects and get paid for your creativity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('dark', inter.className)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Sniglet&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased bg-black text-white">
        <SessionProvider>
          <TooltipProvider delayDuration={0}>
            <NavigationProgress />
            <ParticlesBackground />
            <Layout>
              <main className="relative z-10">{children}</main>
            </Layout>
          </TooltipProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

