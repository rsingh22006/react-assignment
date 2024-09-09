export const AuthButton = ({text,isDisabled=false,w='w-56',floatRight='',m='m-auto'}) => {
  return (
    <button type='submit' disabled={isDisabled} className={`bg-[#0a856d] text-white h-10 ${w} rounded-lg ${floatRight} ${m}`}>{text}</button>
  )
}