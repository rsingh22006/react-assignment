import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { getInputData } from '../utils/getInputData';
import { useShowPassword } from '../customHooks/useShowPassword';
import { useFormData } from '../customHooks/useFormData';

export const Login = () => {
  const { formData, errors: errorsObj, handleChange, handleSubmit } = useFormData('login', { username: '', password: '' });
  const { errors, isErrorOccured } = errorsObj;
  const { showPassword, handleClickShow } = useShowPassword('single');
  const inputData = getInputData('login', formData, showPassword, errors);
  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form
        className='loginForm'
        onSubmit={e => handleSubmit(e, isErrorOccured)}
      >
        {inputData.map((el, idx) =>
          <InputField
            key={idx}
            name={el.name}
            show={el?.show}
            value={el.value}
            labelValue={el.labelValue}
            error={el.error}
            handleChange={handleChange}
            handleClickShow={el.name.toLocaleLowerCase().includes('password') ? handleClickShow : ''}
          />
        )}
        <Button text='LOGIN' w={'w-40'} />
        <p className='loginOption'>
          Don't have account?
          <Link className='loginExternalLink' to='/signup'>
            SignUp
          </Link>
        </p>
      </form>
    </div>
  )
}