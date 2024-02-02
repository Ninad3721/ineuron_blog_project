import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-50 flex'>
                <Image 
                    src='/assets/images/logo.png' width={55} height={38}
                    alt='EventEase Logo'
                 />
                 <h1 className='m-3 font-bold text-2xl'>EventEase</h1>
            </Link>
        
        <SignedIn>
            <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItems />
            </nav>
        </SignedIn>
        
        <div className='flex w-32 justify-end gap-3'>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <MobileNav />
            </SignedIn>
            <SignedOut>
                <Button asChild className='rounded-full' size="lg">
                    <Link href='/sign-in'>
                        Login
                    </Link>
                </Button>
            </SignedOut>
        </div>
        </div>
    </header>
  )
}

export default Header