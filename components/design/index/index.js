import React from 'react'
import Image from 'next/image'
const Design = () => {
    return (
        <li className='h-[410px] md:h-fit mb-5 flex flex-col max-w-[351px] md:max-w-[531px] m-auto'>
            <div className='h-[100%] max-w-[351px]'>
                <Image className=' rounded-xl' src="/smarthome.jpg" width={600} height={600} alt="smart Home" />
            </div>


            <h4 className=' text-xs text-[#828282] font-light mt-3'>
                Full stack application
            </h4>
            <h3 className=' text-lg font-medium'>
                Smart home dashboard
            </h3>

        </li>
    )
}

export default Design