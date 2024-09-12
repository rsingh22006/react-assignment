import React from 'react'
import { Navbar } from '../components/Navbar';

export const Dashboard = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        const handleGetData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);    
            } catch (error) {
                console.log('error',error)
            }
        }
        handleGetData();
    }, []);
    return (
        <div>
            <Navbar headtext={'Dashboard'} />
            <h1 className='dashboardHeading'>Users List</h1>
            <div>
                {users.map(el => {
                    return <div key={el?.id} className='dashboardUserDiv'>
                        <p className='dashboardDivP'>{el.id}.</p>
                        <p className='dashboardDivP'>{el.username}</p>
                        <p className='dashboardDivP'>{el?.name}</p>
                        <p className='dashboardDivP'>{el.email}</p>
                        <p className='dashboardDivP'>{el.phone}</p>
                        <p className='dashboardDivP'>{el.website}</p>
                    </div>
                })}
            </div>
        </div>
    )
}