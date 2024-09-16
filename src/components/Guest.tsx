import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Guest = () => {
  return (
    <div>
      <h1 className='mt-3 flex justify-center'>Welcome To Your Finacial Freedom App!</h1>
      <div className="flex justify-center mt-2">
        <div className='p-2 rounded-md shadow-md bg-blue-700 hover:bg-blue-800 text-white font-semibold'>
      <SignInButton>Get Started</SignInButton>
      </div>
      </div>
    </div>
  )
}

export default Guest