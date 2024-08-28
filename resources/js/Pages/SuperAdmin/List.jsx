import React, { useState, useEffect } from 'react';
import { Head, usePage, Link  } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import EditUser from './EditUser';
import axios from 'axios';
const List = ({ teachersList, teacherData }) => {
        //for layout
        const { props } = usePage();
        //for layout
    const [usersList, setUsersList] = useState([]);
    const [editUserId, setEditUserId] = useState(null);


    console.log('teachersList:', teachersList);
    console.log('teacherData:', teacherData);

    // console.log('teachersList', user);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let response;
                if (teachersList && teachersList.role === 'super_admin') {
                    response = await axios.get('/users?role=teacher');
                } else if (teachersList && teachersList.role === 'teacher') {
                    response = await axios.get(`/users?teacherId=${teachersList.id}&roles[]=student&roles[]=parent`);
                } else {
                    response = await axios.get('/users');
                }
                setUsersList(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        if (teachersList) {
            fetchUsers();
        }
    }, [teachersList]); 




    const handleEditClick = (userId) => {
        setEditUserId(userId);
    };

    const handleCancelEdit = () => {
        setEditUserId(null);
    };

    // const handleDelete = async (userId) => {
    //     try {
    //         await axios.delete(`/users/${userId}`);
    //         setUsersList(usersList.filter(user => user.id !== userId));
    //     } catch (error) {
    //         console.error('Error deleting user:', error);
    //     }
    // };
    const handleDelete = async (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await axios.delete(`/users/${userId}`);
                
                if (response.status === 200) {
                    // Update the local state to remove the deleted user
                    setUsersList(usersList.filter(user => user.id !== userId));
                } else {
                    throw new Error('Failed to delete user');
                }
    
            } catch (error) {
                // Log the error details
                console.error('Error deleting user:', error.response ? error.response.data : error.message);
                alert('An error occurred while trying to delete the user. Please try again.');
            }
        }
    };
    

    const getRoleText = (role) => {
        switch (role) {
            case 0:
                return 'Super Admin';
            case 1:
                return 'Student';
            case 2:
                return 'Teacher';
            case 3:
                return 'Parent';
            default:
                return '';
        }
    };

    return (
        <AuthenticatedLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Super Admin Dashboard</h2>}
    >

        <div className="bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container mx-auto p-4">


                    <div className="mt-4 pb-10 ml-5 mr-4 bg-white shadow-2xl pt-10 ">
                    <div className="text-center mb-7 mt-1">
                        <h2 className="text-2xl font-bold text-sky-600">User Account List</h2>
                    </div>
                        <Link href="/registration" className="bg-sky-200 shadow-2xl ml-3 px-4 py-2 rounded hover:bg-sky-600 hover:text-white  ">Create Account</Link>

                        <table className="table mt-8   table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                            
                            <thead className="thead-light">
                                <tr>
                                    <th className="px-6 py-3 border">ID</th>
                                    <th className="px-24 py-3 border">Name</th>
                                    <th className="px-24 py-3 border">Email</th>
                                    <th className="px-24 py-3 border">Role</th>
                                    <th className="px-16 py-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {Array.isArray(teachersList) && teachersList.map((user, index) => (

                                    <tr key={user.id}>

                                        <td className="px-3 py-4 border">{index + 1}</td>
                                        <td className="px-3 py-4 border">{user.name}</td>
                                        <td className="px-3 py-4 border">{user.email}</td>
                                        <td className="px-3 py-4 border">{getRoleText(user.role)}</td>
                                        <td className="px-3 py-4 border">
                                            <div className="flex justify-around">
                                                <button
                                                    className="px-3 py-2 shadow-lg hover:bg-sky-400 hover:text-white rounded mr-2"
                                                    onClick={() => handleEditClick(user.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-3 py-2 text-red-500 shadow-lg hover:bg-red-400 hover:text-white rounded"
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {editUserId && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <EditUser
                            userId={editUserId}
                            onCancel={handleCancelEdit}
                            userData={teachersList.find(user => user.id === editUserId)}
                        />
                    </div>
                </div>
            )}
        </div>
        </AuthenticatedLayout>
    );
};

export default List;
