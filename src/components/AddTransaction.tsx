'use client'
import addTransaction from '@/app/actions/addTransaction'
import { currentUser } from '@clerk/nextjs/server'
import React, { FC, useRef } from 'react'
import { redirect } from 'next/navigation'


const AddTransaction = () => {
   const ref = useRef<HTMLFormElement>(null)
    const clientAction = async (formData: FormData) => {
        const { data, error} = await addTransaction(formData)

        if (error) {
            console.error(error)
            return
        }else{
            console.log('Transaction added successfully!')
            ref.current?.reset()
            redirect('/')
        }
    }
  return (
    <div className='flex justify-center'>
        <form ref={ref} action={clientAction} className="w-full max-w-sm p-8 border rounded-md mt-5 shadow-sm">
            <div className="mb-4">
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
                <input type="text" id="text" name="text" className="mt-2 block w-full border  rounded-md shadow-sm focus:ring-indigo-500 py-2 px-6" />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="number" step="0.01" id="amount" name="amount" className="mt-2 block w-full border  rounded-md shadow-sm focus:ring-indigo-500 py-2 px-6" />
            </div>
            <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
    </div>
  )
}

export default AddTransaction