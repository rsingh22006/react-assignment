import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { UserList } from '../components/UserList';
import { Button } from '../components/Button';

export const Dashboard = () => {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClickProfile = () => {
        if (!isAuthenticated) {
            alert('You have losted your credentials, if created previously, create again using Signup!')
            navigate('/signup');
        } else {
            navigate('/profile');
        }
    }
    return (
        <div>
            <Button
                text={'My Profile'}
                handleClick={handleClickProfile}
                w='w-40'
                bg={'bg-[yellow]'}
                mt='mt-2'
            />
            <UserList />
        </div>
    )
}