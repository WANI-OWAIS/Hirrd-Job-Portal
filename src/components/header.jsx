import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

const Header = () => {
  return (
    <>
     <nav className='py-4 flex justify-between items-center'>
        <Link>
         <img src="/logo.png" className='h-20 '/>
        </Link>

       

        <div className="flex gap-8">
        <SignedOut>
        <Button variant="outline">Login</Button>
        </SignedOut>
        <SignedIn>
          {/*add a condition here*/}
        <Button variant="maroon" className="rounded-full">
          <PenBox className="mr-2" size={20} />
            Post a Job
           </Button>
          <Link to="/post-job">
          </Link>
          <UserButton />
        </SignedIn>
      </div>

     </nav>
    </>
  )
}

export default Header