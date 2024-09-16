'use server'

import { auth } from "@clerk/nextjs/server"
import { db } from "../../../lib/db"

async function getIncomeExpenses(): Promise<{income?: number, expenses?: number, error?: string}> {
    const { userId } = auth()
    if (!userId) {
        return { error: 'User not authenticated' }
    }
    try {
        const transaction = await db.transaction.findMany({
            where: {
                userid: userId
            },
        })
        const income = transaction.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0)
        const expenses = transaction.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0)
        return { income, expenses: Math.abs(expenses)}
    } catch (error) {
        return { error: 'Database error!' }
        
    }
}

export default getIncomeExpenses