import React from 'react'

export const AuthButton = ({text,isDisabled=false,w='w-56',floatRight=''}) => {
  return (
    <button type='submit' disabled={isDisabled} className={`bg-[#0a856d] text-white h-10 ${w} rounded-lg ${floatRight}`}>{text}</button>
  )
}