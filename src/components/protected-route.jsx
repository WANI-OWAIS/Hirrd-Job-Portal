import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ Children }) => {
   
    const { isSignedIn, isLoaded } = useUser()

    if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to="/?sign-in=true" />
    }

    //Check onboarding status

    
    return Children;
};

export default ProtectedRoute