import Link from 'next/link'
import { Twitter, Github, DiscIcon as Discord } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#141C38]/50 mt-16">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl mb-2 font-display">Code World by Moonlight</h3>
          <p className="text-[#e0e0e0]">Empowering developers to share and earn</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-xl mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
            <li><Link href="/community" className="hover:text-blue-300 transition-colors">Community</Link></li>
            <li><Link href="/store" className="hover:text-blue-300 transition-colors">Store</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">About</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-xl mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link href="https://x.com/jojocraftde_dev" className="text-2xl hover:text-blue-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/jojocraftde-dev" className="text-2xl hover:text-blue-300 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://discord.gg/VP3G5fyMXn" className="text-2xl hover:text-blue-300 transition-colors">
              <Discord className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

