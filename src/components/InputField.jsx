import { Visibility, VisibilityOff } from "@mui/icons-material"

export const InputField = ({ name, type='text', value, labelValue, focus, show, errorDetail, error, handleKeyDown, handleChange, handleChangeFocusAndBlur, handleClickShow }) => {
    return (
        <div className='relative flex flex-col w-full justify-center align-center gap-y-2 m-auto'>
            <label htmlFor={name} className={`absolute top-[-25%] w-fit text-xs pl-4 ${error ? 'text-error-color' : 'text-[#0a856d]'} ${focus || value.length > 0 ? 'block' : 'hidden'}`}>{labelValue}</label>
            {(name !== 'phoneNumber' && !(name.includes('assword'))) &&
                <input
                    type={type}
                    required
                    name={name}
                    value={value}
                    placeholder={value ? '' : labelValue}
                    onKeyDown={handleKeyDown}
                    className={`w-full border-b-[1px] ${focus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                    onChange={handleChange}
                    onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                    onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                />
            }
            {name === 'phoneNumber' && <div className='relative flex items-center'>
                <span className={`absolute top-0 left-[-15px] ${focus || value.length > 0 ? 'block' : 'hidden'}`}>+91</span>
                <input
                    type={type}
                    required
                    name={name}
                    value={value}
                    placeholder={value ? '' : labelValue}
                    onKeyDown={handleKeyDown}
                    className={`w-full border-b-[1px] ${focus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                    onChange={handleChange}
                    onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                    onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                />
            </div>}
            {name.includes('assword') && <div className='flex items-center'>
                <input
                    type={show ? 'text' : 'password'}
                    required
                    name={name}
                    value={value}
                    placeholder={focus ? '' : labelValue}
                    onKeyDown={handleKeyDown}
                    className={`w-full border-b-[1px] ${focus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                    onChange={handleChange}
                    onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                    onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                />
                <button type='button' onClick={handleClickShow} className='ml-[-7%] text-gray-400'>{show ? <VisibilityOff /> : <Visibility />}</button>
            </div>}
            <p className={`text-red text-left text-error-color text-sm pl-4 ${error ? 'visible' : 'invisible'} h-10`}>{errorDetail}</p>
        </div>
    )
}