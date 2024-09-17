import { useContext, useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export const Dashboard = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const hasFetchedData = useRef(false);
    const handleClickProfile = () => {
        if (Object.keys(user).length<1) {
            alert('You have losted your credentials, if created previously, create again using Signup!')
            navigate('/signup');
        } else {
            navigate('/profile');
        }
    }
    useEffect(() => {
        if (hasFetchedData.current) return;  //Skiping if data already fetched
        const handleGetData = async (api) => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('error', error)
            }
        }
        handleGetData('https://jsonplaceholder.typicode.com/users');  //calling API
        return () => hasFetchedData.current = true;  //cleanup
    }, []);
    return (
        <div>
            <Navbar headtext={'Dashboard'} />
            <button onClick={handleClickProfile} className='bg-[yellow] text-[white] font-bold p-2 mt-2 rounded-md'>My Profile</button>
            <h1 className='dashboardHeading'>Users List</h1>
            <div>
                {users?.map(el => {
                    return (
                        <div key={el?.id} className='dashboardUserDiv'>
                            <p className='dashboardDivP sm:w-1/12'>{el.id}.</p>
                            <p className='dashboardDivP sm:w-2/12'>{el.username}</p>
                            <p className='dashboardDivP sm:w-2/12'>{el?.name}</p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'>{el.email}</p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'>{el.phone}</p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'>{el.website}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}