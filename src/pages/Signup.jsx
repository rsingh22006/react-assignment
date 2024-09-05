import { Navbar } from '../components/Navbar';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';
import { getInputSignupData } from '../utils/authInputData';
import { handleCheckConfirmNewPassword, handleCheckEmail, handleCheckNewPassword, handleCheckUsername } from '../utils/validationLogic';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';
import { useFocusAndBlur } from '../customHooks/useFocusAndBlur';

const initData = {
    formData: { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' },
    focusData: { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false }
}

export const Signup = () => {
    const {formData,handleChange,handleSubmit} = useFormData('signup',initData.formData);
    const {showPassword,handleClickShow}=useShowPassword('signup');
    const checkUsername = handleCheckUsername(formData.username)
    const checkNewPassword = handleCheckNewPassword(formData.username, formData.newPassword);
    const checkConfirmNewPassword = handleCheckConfirmNewPassword(formData.newPassword, formData.confirmNewPassword)
    const checkEmail = handleCheckEmail(formData.email)
    const {focusData,handleChangeFocusAndBlur}= useFocusAndBlur(initData.focusData);
    const inputData = getInputSignupData(
        formData, focusData, showPassword, checkUsername, checkEmail, checkNewPassword, checkConfirmNewPassword,
        handleChange, handleChangeFocusAndBlur, handleClickShow
    );
    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={e=>handleSubmit(e,checkUsername,checkNewPassword,checkConfirmNewPassword,checkEmail,!(formData.phoneNumber.length > 9),)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {inputData.map((el, idx) =>
                        <InputField
                            key={idx}
                            name={el.name}
                            show={el.show}
                            type={el.type}
                            value={el.value}
                            labelValue={el.labelValue}
                            focus={el.focus}
                            error={el.error}
                            errorDetail={el.errorDetail}
                            handleKeyDown={el.handleKeyDown}
                            handleChange={el.handleChange}
                            handleChangeFocusAndBlur={el.handleChangeFocusAndBlur}
                            handleClickShow={el?.handleClickShow}
                        />
                    )}
                </div>
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}