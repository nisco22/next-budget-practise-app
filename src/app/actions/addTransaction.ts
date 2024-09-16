'use server'
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "../../../lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
    text: string,
    amount: number,
    userid: string,
}

interface TransactionResult {
    error?: string,
    data?: TransactionData,
}

async function addTransaction(formData: FormData): Promise<TransactionResult>{

    const textValue = formData.get('text');
    const amountValue = formData.get('amount');

    if(!textValue || textValue==="" || !amountValue){
        return { error: 'Please provide both text and amount.' };
    }

    let text: string;
    let amount: number;

    if (typeof textValue === 'string') {
        text = textValue;
    } else {
        return { error: 'Invalid text value.' };
    }

    if (typeof amountValue === 'string' && !isNaN(parseFloat(amountValue))) {
        amount = parseFloat(amountValue);
    } else {
        return { error: 'Invalid amount value.' };
    }

    const { userId } = auth()
    console.log('user id ', userId)

    try {

        const transactionData: TransactionData = db.transaction.create({
            data: {
                text,
                amount,
                userid: userId,
            }
        })
        revalidatePath('/')
    
        return { data: transactionData}
        
    } catch (error) {
        console.error(error)
    }

    

}

export default addTransaction;
