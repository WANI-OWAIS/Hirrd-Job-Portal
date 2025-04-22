import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { UserButton, SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false)

  const [search, setSearch] = useSearchParams()

  useEffect(() => {
    if (search.get('sign-in')) {
      setShowSignIn(true)
    }
  }, [search])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({})
    }
  }

  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
          <img src="/logo.png" className='h-20 ' />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
          </SignedOut>
          <SignedIn>
            {/*add a condition here*/}
            <Link to="/post-job">
              <Button variant="maroon" className="rounded-full">
                <PenBox className="mr-2" size={20} />
                Post a Job
              </Button>
            </Link>
            <UserButton appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              }
            }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label='My Jobs'
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href='/my-jobs'
                />

                <UserButton.Link
                  label='Saved Jobs'
                  labelIcon={<Heart size={15} />}
                  href='/saved-jobs'
                />
              </UserButton.MenuItems>

            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn &&
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'
          onClick={handleOverlayClick}>
          <SignIn
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
          />
        </div>}

    </>
  )
}

export default Header