import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function Main() {
    const [isItEnglish , setIsItEnglish ]= useState(true)
    
  return (
    <div className='mt-8' >
        <div onClick={()=>{setIsItEnglish(per=>!per)}} className={!isItEnglish? "flex justify-around items-center text-[#9c89b8] flex-row-reverse ":'flex justify-around items-center text-[#9c89b8] '}>
            <h2 className='flex-1 text-center'>English</h2>
            <IconButton>
                <SwapHorizIcon className='text-[#9c89b8]'/>
            </IconButton>
            <h2 className='flex-1 text-center'>Tchitoria</h2>
        </div>
        <div className='flex flex-col py-5'>
            <div>
            <textarea className='w-full text-2xl outline-none p-3' name="" id="" rows="6"></textarea>
            </div>
            <div>
            <textarea className='w-full text-2xl outline-none p-3 text-white bg-[#9c89b8]' name="" id="" rows="6"></textarea>
            </div>
        </div>
    </div>

  )
}
