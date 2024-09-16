import { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar';

export const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const hasFetchedData = useRef(false);
    const handleGetData = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
        if (hasFetchedData.current) return; // Skiping if data already fetched
        handleGetData('https://jsonplaceholder.typicode.com/users');
        hasFetchedData.current = true;
    }, []);
    return (
        <div>
            <Navbar headtext={'Dashboard'} />
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