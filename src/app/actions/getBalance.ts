'use server'

import { auth } from "@clerk/nextjs/server";
import { db } from "../../../lib/db";

// interface TotalBalance {
//     amount: number;
//     error: string;
// }

async function getBalance() : Promise<{amount?: number, error?: string}>{
    const { userId} = auth()

    if (!userId){
        return { amount: 0, error: 'User not authenticated.'}
    }

    try {
        const balance = await db.transaction.findMany({
            where: {
                userid: userId,
            },
        })
        
        const totalAmount = balance.reduce((acc, curr) => acc + curr.amount, 0)

        return { amount: totalAmount }
    } catch (error) {
        return { amount: 0, error: 'Database Error! Please Wait for some time..' }
    }
}

export default getBalance;