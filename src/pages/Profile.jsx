import { useContext } from 'react'
import { UserContext } from '../App';
import { Form } from '../components/Form/Form';

export const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <Form type={'profile'} className={'signupOrProfile'} initData={user} />
    )
}