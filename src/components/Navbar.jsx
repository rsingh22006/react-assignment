import React from 'react'

export const Navbar = ({headtext,headtextSize,paraText}) => {
    return (
        <div className='bg-[#0a856d] text-white h-[15vh] text-center'>
            <p className={`pt-[2%] ${headtextSize?`text-${headtextSize}`:''}`}>{headtext}</p>
            {paraText && <p className='text-gray-300'>{paraText}</p>}
        </div>
    )
}