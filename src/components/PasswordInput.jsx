import { Visibility, VisibilityOff } from "@mui/icons-material"

export const PasswordInput = ({name,value,labelValue,focus,show,errorDetail,error,handleKeyDown,handleChange,handleChangeFocusAndBlur,handleClickShow}) => {
    return (
            <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center'>
            <label htmlFor={name} className={`absolute top-[-25%] w-fit text-xs pl-4 ${error? 'text-error-color' : 'text-[#0a856d]'} ${focus || value.length > 0 ? 'block' : 'hidden'}`}>{labelValue}</label>
            <div className='flex items-center'>
              <input
                type={show? 'text' : 'password'}
                required
                name={name}
                value={value}
                placeholder={focus ? '' : labelValue}
                onKeyDown={handleKeyDown}
                className={`w-full border-b-[1px] ${focus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                onChange={handleChange}
                onFocus={(e)=>handleChangeFocusAndBlur(e,'focus')}
                onBlur={(e)=>handleChangeFocusAndBlur(e,'blur')}
              />
              <button type='button' onClick={handleClickShow} className='ml-[-7%] text-gray-400'>{show? <VisibilityOff /> : <Visibility />}</button>
            </div>
            <p className={`text-red text-left text-error-color text-sm pl-4 ${error? 'visible' : 'invisible'} h-10`}>{errorDetail}</p>
          </div>
    )
}