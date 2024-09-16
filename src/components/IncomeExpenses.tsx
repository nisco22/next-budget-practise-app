import getIncomeExpenses from '@/app/actions/getIncomeExpenses';
import React from 'react';

const IncomeExpenses = async () => {
    const {income, expenses} = await getIncomeExpenses()
    return (
        <div className="flex justify-center">
            <div className="max-w-md mx-2 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-gray-800 font-bold text-lg mb-2">Income</h2>
                <div className="p-4 bg-green-100 rounded-lg">
                    <p className="text-lg font-semibold text-green-800">{income}</p>
                </div>
            </div>
            <div className="max-w-md mx-2 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-gray-800 font-bold text-lg mb-2">Expenses</h2>
                <div className="flex align-center text-center p-4 bg-red-100 rounded-lg">
                    <p className=" text-lg font-semibold text-red-800">{expenses}</p>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpenses;