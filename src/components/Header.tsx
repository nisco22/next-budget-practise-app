import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React, { FC } from 'react'
import { checkUser } from '../../lib/checkUser'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'


async function Header(){
    const user = checkUser()
   
  return (
    <div>

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <SignedOut>
      <button type="button" className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><SignInButton /></button>
      </SignedOut>
      
      <SignedIn />       
      <UserButton showName />
      <SignedIn />
      
     
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    
  </div>
  </div>
</nav>

    </div>
  )
}

export default Header