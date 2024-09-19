import { Form } from '../components/Form/Form';
import { initSignupData } from '../utils/initData';

export const Signup = () => {
    return (
        <Form type={'signup'} className={'signupOrProfile'} initData={initSignupData} />
    )
}