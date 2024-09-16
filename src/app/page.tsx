import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransactionsList from "@/components/TransactionsList";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div>
      <div className="px-10 flex justify-between">
      <h1 className="mr-4 text-2xl font-semibold">Welcome, {user.firstName}</h1>
    <Link href='/add-transaction' className='text-sm font-semibold mr-3 mt-1 rounded-md p-2 border hover:bg-gray-500 hover:text-white'>Add Transaction</Link>
    </div>
    <div className="flex justify-center mt-4">
      <Balance />
    </div>
    <div className="flex justify-center mt-4">
      <IncomeExpenses />
    </div>
    <div className="flex justify-center mt-5">
     <TransactionsList />
    </div>
    </div>
  );
}
