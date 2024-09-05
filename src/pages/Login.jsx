import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';
import { getInputLoginData } from '../utils/authInputData';
import { handleCheckNewPassword, handleCheckUsername } from '../utils/validationLogic';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';
import { useFocusAndBlur } from '../customHooks/useFocusAndBlur';

export const Login = () => {
  const {formData,handleChange,handleSubmit} = useFormData('login',{username:'',password:''});
  const checkUsername = handleCheckUsername(formData.username);
  const checkPassword = handleCheckNewPassword(formData.username, formData.password);
  const {showPassword,handleClickShow}=useShowPassword('login');
  const {focusData,handleChangeFocusAndBlur}= useFocusAndBlur({username:false,password:false});
  const inputData = getInputLoginData(
    formData, focusData, showPassword, checkUsername, checkPassword,
    handleChange, handleChangeFocusAndBlur, handleClickShow
  );
  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form autoComplete='off' className='w-1/2 lg:w-[40vw] mx-auto mt-[7vh] lg:mt-[18vh] flex flex-col gap-10' onSubmit={e=>handleSubmit(e,checkUsername,checkPassword)}>
        {inputData.map((el, idx) =>
          <InputField
            key={idx}
            name={el.name}
            show={el?.show}
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
        <AuthButton text='LOGIN' w={'w-40'} />
        <p className='mt-[-3vh] text-center'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}