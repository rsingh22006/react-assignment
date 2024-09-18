import { handleKeyDown, handlePaste } from '../utils/handleFuncLogic';
import { VisibilityIcon } from './VisibilityIcon';
import editIcon from '../assets/edit.png'

export const InputField = ({ name, type = 'text', value, labelValue, isEditable = false, show, error, handleChange, handleClickShow }) => {
    const isPhoneNum = name === 'phoneNumber';
    return (
        <div className='inputFieldDiv'>
            <div className='inputFieldChildDiv'>
                <input
                    id={name}
                    type={show === false ? 'password' : type}
                    required
                    name={name}
                    value={value}
                    autoComplete='webauthn'  //using this to prevent default behaviour of auto filling
                    placeholder=''
                    onKeyDown={handleKeyDown}
                    className={`inputFieldInput peer ${isPhoneNum ? 'ml-6' : ''}`} //we are using peer outside of @apply because comes under state-based utilities
                    onChange={handleChange}
                    onPaste={e => isPhoneNum ? handlePaste(e) : ''}
                />
                {isPhoneNum &&
                    <span className={`inputFieldPhoneSpan ${value.length > 0 ? 'block' : ''}`}>
                        +91
                    </span>
                }
                {((name.toLocaleLowerCase()).includes('password') && value.length > 0) &&
                    <button
                        type='button'
                        onClick={() => handleClickShow(name)}
                        className='inputFieldPassButton'
                    >
                        <VisibilityIcon show={show} />
                    </button>
                }
                {isEditable &&
                    <img
                        src={editIcon}
                        className='inputFieldEditButton'
                        alt="edit icon"
                    />}
                <label
                    htmlFor={name}
                    className={`inputFieldLabel ${error ? 'text-error' : 'peer-focus:text-theme'}`}
                >
                    {labelValue}
                </label>
            </div>
            <p className={`inputFieldError ${error ? 'visible' : 'invisible'}`}>
                {error}
            </p>
        </div>
    )
}