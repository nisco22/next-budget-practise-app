'use server'

import { auth } from '@clerk/nextjs/server'
import { db } from '../../../lib/db'

interface TransactionData {
    id: string,
    text: string,
    amount: number,
    createdat: Date,
    userid: string,
}

async function getTransactions(): Promise<{transactions?: TransactionData[], error?: string}>{
    const { userId } = auth()
    if (!userId) {
        return { error: 'User not authenticated' }
    }
    try {
        const transactions = await db.transaction.findMany({
            where: {
                userid: userId
            },
        })
        
        return { transactions }
    } catch (error) {
        console.error('Error fetching transactions:', error)
        return { error: 'Failed to fetch transactions' }
    }
}

export default getTransactions