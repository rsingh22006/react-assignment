import { Link } from 'react-router-dom'
import { Form } from '../components/Form/Form';
import { initLoginData } from '../utils/initData';
import { Navbar } from '../components/Navbar';

export const Login = () => {
  return (
    <>
      <Navbar path={'login'}/>
      <Form
        type={'login'}
        className={'login'}
        initData={initLoginData}
      />
      <p className='loginOption'>
        Don't have account?
        <Link className='loginExternalLink' to='/signup'>
          SignUp
        </Link>
      </p>
    </>
  )
}