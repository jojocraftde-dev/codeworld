import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Rocket, Info } from 'lucide-react'
import { FeaturedProjects } from '@/components/featured-projects'
import { HowItWorks } from '@/components/how-it-works'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl rounded-full py-2 px-4 z-50 backdrop-blur-md bg-[#141C38]/80">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white flex items-center font-display">
            <Moon className="mr-2" />
            Code World
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
            <Link href="/community" className="text-white hover:text-blue-300 transition-colors">Community</Link>
            <Link href="/store" className="text-white hover:text-blue-300 transition-colors">Store</Link>
          </div>
          <Link href="/store">
            <Button className="btn-glow px-6 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white border-none">
              Join Now
            </Button>
          </Link>
        </div>
      </nav>

      <header className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display animate-pulse">
          Code World by Moonlight
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-[#e0e0e0]">
          Share your coding projects and get paid for your creativity. A community project where developers can showcase their work and earn rewards.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/store">
            <Button className="btn-glow px-8 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white border-none">
              <Rocket className="mr-2" />
              Get Started
            </Button>
          </Link>
          <Button variant="outline" className="px-8 py-4 rounded-full text-xl font-semibold border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
            <Info className="mr-2" />
            Learn More
          </Button>
        </div>
      </header>

      <FeaturedProjects />
      <HowItWorks />
      <Footer />
    </div>
  )
}

