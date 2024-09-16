import AddTransaction from '@/components/AddTransaction'
import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = () => {

  return (
    <div>
        <h1 className='flex justify-center text-center mt-2 text-gray-800 font-bold text-2xl tracking-tight '>Add Transaction</h1>
        <AddTransaction />
    </div>
  )
}

export default page