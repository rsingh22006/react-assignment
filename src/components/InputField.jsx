import { handleKeyDown, handlePaste } from '../utils/handleFuncLogic';
import { VisibilityIcon } from './VisibilityIcon';
import editIcon from '../assets/pen.png'

export const InputField = ({ name, type = 'text', value, labelValue, isEditable = false, show, error, handleChange, handleClickShow }) => {
    const isPhoneNum = name === 'phoneNumber';
    return (
        <div className='inputFieldDiv'>
            <input
                id={name}
                type={show === false ? 'password' : type}
                required
                name={name}
                value={value}
                placeholder=''
                onKeyDown={handleKeyDown}
                className={`inputFieldInput peer`} //we are using peer outside of @apply because comes under state-based utilities
                onChange={handleChange}
                onPaste={e => isPhoneNum ? handlePaste(e) : ''}
            />
            {((name.toLocaleLowerCase()).includes('password') && value.length > 0) &&
                <button
                    type='button'
                    onClick={() => handleClickShow(name)}
                    className='inputFieldPassButton'
                >
                    <VisibilityIcon show={show} />
                </button>
            }
            {isEditable && <img src={editIcon} className='inputFieldEditButton' alt="edit icon" />}
            {isPhoneNum &&
                <span className={`inputFieldPhoneSpan ${value.length > 0 ? 'block' : 'hidden'}`}>
                    +91
                </span>}
            <label
                htmlFor={name}
                className={`inputFieldLabel ${error ? 'peer-focus:text-error-color text-error-color' : 'peer-focus:text-[#0a856d]'}`}
            >
                {labelValue}
            </label>
            <p className={`inputFieldError ${error ? 'visible' : 'invisible'}`}>
                {error}
            </p>
        </div>
    )
}