import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Sn No.', width: 90 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone No.', width: 200 },
    { field: 'website', headerName: 'Website', width: 150 },
]

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const hasFetchedData = useRef(false);
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
            <h1 className='dashboardHeading'>
                User List
            </h1>

            {/* <div>
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
                {users.length < 1 &&
                    <p className='loading'>
                        Loading...
                    </p>
                }
            </div> */}
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    )
}