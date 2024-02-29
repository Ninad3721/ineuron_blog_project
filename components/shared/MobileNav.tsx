import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import NavItems from './NavItems'
import { Separator } from '../ui/separator'

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className='flex'>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={55}
              height={38}
            />
            <h1 className="font-bold text-xl m-3">EventEase</h1>
          </div>
          <Separator className="border border-gray-100" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav