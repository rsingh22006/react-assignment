import { Navbar } from '../components/Navbar';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';
import { getInputSignupData, handlePaste } from '../utils/authInputData';
import { handleCheckConfirmNewPassword, handleCheckEmail, handleCheckName, handleCheckNewPassword, handleCheckPhoneNumber, handleCheckUsername } from '../utils/validationLogic';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';
import { useFocusAndBlur } from '../customHooks/useFocusAndBlur';

const initData = {
    formData: { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' },
    focusData: { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false }
}
export const Signup = () => {
    const { formData, handleChange, handleSubmit } = useFormData('signup', initData.formData);
    const { showPassword, handleClickShow } = useShowPassword('signup');
    const checkName = handleCheckName(formData.name);
    const checkUsername = handleCheckUsername(formData.username);
    const checkEmail = handleCheckEmail(formData.email);
    const checkPhoneNumber = handleCheckPhoneNumber(formData.phoneNumber)
    const checkNewPassword = handleCheckNewPassword(formData.username, formData.newPassword);
    const checkConfirmNewPassword = handleCheckConfirmNewPassword(formData.newPassword, formData.confirmNewPassword);
    const { focusData, handleChangeFocusAndBlur } = useFocusAndBlur(initData.focusData);
    const inputData = getInputSignupData(
        formData, focusData, showPassword,checkName, checkUsername, checkEmail,checkPhoneNumber, checkNewPassword, checkConfirmNewPassword,
        handleChange,handlePaste,handleChangeFocusAndBlur, handleClickShow
    );
    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={e => handleSubmit(e,checkName, checkUsername, checkNewPassword, checkConfirmNewPassword, checkEmail, !(formData.phoneNumber.length > 9),)}>
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
                            handleKeyDown={el.handleKeyDown}
                            handlePaste={el.handlePaste}
                            handleChange={el.handleChange}
                            handleChangeFocusAndBlur={el.handleChangeFocusAndBlur}
                            handleClickShow={el.handleClickShow}
                        />
                    )}
                </div>
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}