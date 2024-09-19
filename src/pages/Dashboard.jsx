import { useContext, useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export const Dashboard = () => {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const hasFetchedData = useRef(false);
    const handleClickProfile = () => {
        if (!isAuthenticated) {
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
            <button
                onClick={handleClickProfile}
                className='profileBtn'
            >
                My Profile
            </button>
            <h1 className='dashboardHeading'>
                Users List
            </h1>
            <div>
                <div className='dashboardUserDiv font-medium'>
                    <p className='dashboardDivP sm:w-1/12'
                    >
                        Sn No.
                    </p>
                    <p className='dashboardDivP sm:w-2/12'
                    >
                        Username
                    </p>
                    <p className='dashboardDivP sm:w-2/12'
                    >
                        Name
                    </p>
                    <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                    >
                        Email
                    </p>
                    <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                    >
                        Phone No.
                    </p>
                    <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                    >
                        Website
                    </p>
                </div>
                {users?.map(el => {
                    return (
                        <div key={el?.id} className='dashboardUserDiv'>
                            <p className='dashboardDivP sm:w-1/12'
                            >
                                {el.id}.
                            </p>
                            <p className='dashboardDivP sm:w-2/12'
                            >
                                {el.username}
                            </p>
                            <p className='dashboardDivP sm:w-2/12'
                            >
                                {el?.name}
                            </p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                            >
                                {el.email}
                            </p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                            >
                                {el.phone}
                            </p>
                            <p className='dashboardDivP sm:w-3/12 md:w-2/12'
                            >
                                {el.website}
                            </p>
                        </div>
                    );
                })}
                {users.length < 1 && <p className='loading'>Loading...</p>}
            </div>
        </div>
    )
}