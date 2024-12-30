'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession, signOut } from 'next-auth/react'

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl rounded-full py-2 px-4 z-50 backdrop-blur-md bg-[#141C38]/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center font-display">
          <Moon className="mr-2" />
          Code World
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={`text-white hover:text-blue-300 transition-colors ${pathname === '/' ? 'text-blue-300' : ''}`}>Home</Link>
          <Link href="/community" className={`text-white hover:text-blue-300 transition-colors ${pathname === '/community' ? 'text-blue-300' : ''}`}>Community</Link>
          <Link href="/store" className={`text-white hover:text-blue-300 transition-colors ${pathname === '/store' ? 'text-blue-300' : ''}`}>Store</Link>
        </div>
        <div className="flex items-center space-x-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={session.user?.image || '/placeholder.svg'} alt="User avatar" />
                  <AvatarFallback>{session.user?.name?.[0] || 'U'}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/account">Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={() => signOut()}>
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="btn-glow px-6 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white border-none">
                Join Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

