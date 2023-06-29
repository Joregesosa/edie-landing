import React from 'react'

const Services = ({
    color,
    title,
    icon
}) => {
    return (
        <li className=' h-[422px] flex flex-col justify-center   rounded-3xl p-4 max-w-[307px] cursor-pointer hover:shadow-md'>
            <div className=' w-16 h-16 bg-[#2D9CDB] rounded-xl'>

            </div>

            <h2 className=' text-2xl font-bold py-8'>
                UI/UX Design
            </h2>

            <p className='text-[#4F4F4F] w-[275px] text-base font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
            </p>

            <button className=' bg-[#E0E0E0] rounded-xl w-[116px] h-[42px] text-base text-[#828282] font-medium mt-12'>
                Get started
            </button>
        </li>
    )
}

export default Services