import getBalance from '@/app/actions/getBalance';
import React, { FC } from 'react';


const Balance = async () => {
    const { amount } = await getBalance()
    console.log(amount)
    return (
        <div className="max-w-md mx-auto px-6 py-4 bg-white rounded-lg shadow-md">
            <h1 className='text-center text-gray-800 font-semibold text-2xl tracking-tight'>Your Balance</h1>
            <div className="mt-2 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="text-2xl font-semibold text-blue-800">{amount}</p>
                </div>
            </div>
        </div>
    );
};

export default Balance;