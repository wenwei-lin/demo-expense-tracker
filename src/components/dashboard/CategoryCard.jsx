import React from 'react'

const CategoryCard = ({ icon, bgColor, title, amount }) => {
    return (
        <div 
        className={`flex bg-red-400 w-48 h-14 rounded-xl items-center`}
        style={{backgroundColor: bgColor}}
        >
            <div className='text-2xl text-gray-100 px-3'>
                {icon}
            </div>
            <div className='flex flex-col ml-2'>
                <span className='font-poppins text-base font-semibold text-gray-100'>{title}</span>
                <span className='font-poppins text-xs font-semibold text-gray-100'>¥ {amount.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default CategoryCard