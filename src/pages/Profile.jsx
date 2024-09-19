import { useContext } from 'react'
import { UserContext } from '../App';
import { Navbar } from '../components/Navbar';
import { useFormData } from '../customHooks/useFormData';
import { getInputData } from '../utils/getInputData';
import { useShowPassword } from '../customHooks/useShowPassword';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';

export const Profile = () => {
    const { user } = useContext(UserContext);
    const { showPassword, handleClickShow } = useShowPassword('single');
    const { formData, errors: errorsObj, handleChange, handleSubmit } = useFormData('profile', user);
    const { errors, isErrorOccured } = errorsObj;
    const inputData = getInputData('all', formData, showPassword, errors);
    return (
        <div>
            <Navbar headtext={'Profile Page'} />
            <form
                className='signupForm'
                onSubmit={e => handleSubmit(e, isErrorOccured)}
            >
                <div className='signupUnderFormDiv'>
                    {inputData?.length > 0 && inputData.map(el =>
                        <InputField
                            key={el.id}
                            name={el.name}
                            show={el.show}
                            type={el.type}
                            value={el.value}
                            labelValue={el.labelValue}
                            isEditable={true}
                            error={el.error}
                            handleChange={handleChange}
                            handleClickShow={el.name.toLocaleLowerCase().includes('password') ? handleClickShow : ''}
                        />
                    )}
                </div>
                <Button text='Submit Changes' floatRight={'float-right'} bg={'bg-theme'} />
            </form>
        </div>
    )
}