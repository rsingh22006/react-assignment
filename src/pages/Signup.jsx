import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { getInputData } from '../utils/getInputData';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';

const initForm = { name: '', username: '', email: '', phoneNumber: '', password: '', confirmNewPassword: '' };
export const Signup = () => {
    console.log('crypto.randomUUID()',crypto.randomUUID())
    // const randomId = crypto.randomUUID()
    const { formData, errors: errorsObj, handleChange, handleSubmit } = useFormData('signup', initForm);
    const { errors, isErrorOccured } = errorsObj;
    const { showPassword, handleClickShow } = useShowPassword('double');
    const inputData = getInputData('all', formData, showPassword, errors);
    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form
                className='signupForm'
                onSubmit={e => handleSubmit(e, isErrorOccured)}
            >
                <div className='signupUnderFormDiv'>
                    {inputData.map(el =>
                        <InputField
                            key={el.id}
                            name={el.name}
                            show={el.show}
                            type={el.type}
                            value={el.value}
                            labelValue={el.labelValue}
                            error={el.error}
                            handleChange={handleChange}
                            handleClickShow={el.name.toLocaleLowerCase().includes('password') ? handleClickShow : ''}
                        />
                    )}
                </div>
                <Button text='SIGN UP' floatRight={'float-right'} bg={'bg-theme'} />
            </form>
        </div>
    )
}