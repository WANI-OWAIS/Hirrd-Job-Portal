import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
     <nav className='py-4 flex justify-between items-center'>
        <Link>
         <img src="/logo.png" className='h-20 '/>
        </Link>

        <Button variant="outline">Login</Button>

        {/* <div className="flex gap-4">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div> */}

     </nav>
    </>
  )
}

export default Header