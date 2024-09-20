import { useContext } from 'react'
import { UserContext } from '../App';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar';

export const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <Navbar path={'profile'}/>
            <Form
                type={'profile'}
                className={'signupOrProfile'}
                initData={user}
            />
        </>
    )
}