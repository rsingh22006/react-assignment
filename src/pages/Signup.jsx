import { Navbar } from '../components/Navbar';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';
import { getInputSignupData } from '../utils/authInputData';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';

const initForm={ name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' };

export const Signup = () => {
    const { formData, errors: errorsObj, handleChange, handleSubmit } = useFormData('signup',initForm);
    const { errors, isErrorOccured } = errorsObj;
    const { showPassword, handleClickShow } = useShowPassword('signup');
    const inputData = getInputSignupData(formData, showPassword, errors);
    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={e => handleSubmit(e, isErrorOccured)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {inputData.map((el, idx) =>
                        <InputField
                            key={idx}
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
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}