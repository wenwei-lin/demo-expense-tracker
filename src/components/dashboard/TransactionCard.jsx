import React from 'react'

const TransactionCard = ({ icon, title, date, amount }) => {
    return (
        <div className='w-full h-16 border rounded-xl border-gray-100 shadow-xl flex items-center px-5 relative'>
            <div className='flex gap-6'>
                <div className='p-2 bg-gray-500 rounded-full'>
                    <span className='text-3xl text-gray-50'>{icon}</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-poppins text-xl font-semibold'>{title}</span>
                    <span className='font-poppins text-sm text-gray-500'>{date}</span>
                </div>
            </div>
            <div className='absolute left-3/4'>
                <span className='text-xl font-poppins font-semibold'>¥ {amount.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default TransactionCard