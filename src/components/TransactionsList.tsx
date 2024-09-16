import getTransactions from '@/app/actions/getTransactions'
import React from 'react'

interface TransactionData {
    id: string,
    text: string,
    amount: number,
    createdat: Date,
    userid: string,
}

const TransactionsList = async () => {
    const { transactions } = await getTransactions() 
  return (
    <div>
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-gray-800 font-bold text-lg mb-2">Transaction List</h2>
            <div>
                {transactions && transactions.map((transaction: TransactionData, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                        <p className="text-lg font-semibold">{transaction.text}</p>
                        <p className="text-sm text-gray-600">{transaction.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TransactionsList