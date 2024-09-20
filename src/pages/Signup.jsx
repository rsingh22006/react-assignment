import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar';
import { initSignupData } from '../utils/initData';

export const Signup = () => {
    return (
        <>
            <Navbar path={'signup'}/>
            <Form
                type={'signup'}
                className={'signupOrProfile'}
                initData={initSignupData}
            />
        </>
    )
}