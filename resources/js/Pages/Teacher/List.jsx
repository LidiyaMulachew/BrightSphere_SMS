import React, { useState, useEffect } from 'react';
import { Head, usePage , Link} from '@inertiajs/react';
// import CreateParentAccount from '@/teacher/CreateParentAccount'; // Adjust the path as per your project structure

import TeacherLayout from '@/Layouts/TeacherLayout';

import EditUser from './EditUser';
import CreateParentAccount from './CreateParentAccount';

import axios from 'axios';
const List = ({ studentsList }) => {
        //for layout
        const { props } = usePage();
        //for layout
    const [usersList, setUsersList] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [studentId, setStudentId] = useState(null); // Initialize as null

    // console.log('studentsList:', studentsList);
    // console.log('studentId:', studentId);


    const handleParentCreateClick = (studentId) => {
   
        // window.location.href = `/parent/create/${studentId}`;
        window.location.href = `/parent/${studentId}`;


    };


    useEffect(() => {
        // console.log('studentsList:', studentsList);
    }, [studentsList]);


    // const handleEditClick = (userId) => {
    //     setEditUserId(userId);
    // };
    const handleEditClick = (userId) => {
        window.location.href = `/studentslist/${userId}/edit`; 
    };

    const handleCancelEdit = () => {
        setEditUserId(null);
    };

    const handleDelete = async (userId) => {
        
        try {
            await axios.delete(`/users/${userId}`);
            setUsersList(usersList.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
//     const handleDelete = async (userId) => {
//         if (confirm('Are you sure you want to delete this user?')) {
//             try {
//                 // Perform the delete request
//                 await axios.delete(`/users/${userId}`);
                
//                 // Optionally, you can show a success message
//                 alert('User deleted successfully.');
//                 fetchUsers();
//                 // Reload the page to reflect the deletion
//                 // window.location.reload();
    
//             } catch (error) {
//                 // Handle errors by logging them or showing an error message
//                 console.error('Error deleting user:', error);
//                 alert('An error occurred while trying to delete the user. Please try again.');
//             }
//         }
//     };
// // Function to refetch the users list
// const fetchUsers = async () => {
//     try {
//         let response;
//         if (teachersList && teachersList.role === 'super_admin') {
//             response = await axios.get('/users?role=teacher');
//         } else if (teachersList && teachersList.role === 'teacher') {
//             response = await axios.get(`/users?teacherId=${teachersList.id}&roles[]=student&roles[]=parent`);
//         } else {
//             response = await axios.get('/users');
//         }
//         setUsersList(response.data);
//     } catch (error) {
//         console.error('Error fetching users:', error.response ? error.response.data : error.message);
//     }
// };
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
        <TeacherLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
    >

        <div className="bg-gray-100 flex items-center  justify-center ml-6 mr-5 ">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container mx-auto p-4">

                    <div className="mt-4 bg-white shadow-2xl pb-10 ">
                    <div className="text-center mb-7 mt-5">
                        <h2 className="text-2xl font-bold pt-5 text-gray-600">User Account List</h2>
                    </div>
                <Link href="/registerstudents" className="bg-blue-200 ml-5  hover:bg-sky-500 hover:text-white shadow-lg px-4 py-2 rounded">Create Account</Link>

                        <table className="table mt-5 pb-5 table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
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

                                {Array.isArray(studentsList) && studentsList.map((user, index) => (

                                    <tr key={user.id}>

                                        <td className="px-3 py-4 border">{index + 1}</td>
                                        <td className="px-3 py-4 border">{user.name}</td>
                                        <td className="px-3 py-4 border">{user.email}</td>
                                        <td className="px-3 py-4 border">{getRoleText(user.role)}</td>
                                        <td className="px-3 py-4 border">
                                            <div className="flex justify-around">
                                                <button
                                                    className="bg-white shadow-lg px-3 py-2 rounded hover:bg-sky-500 hover:text-white mr-2"
                                                    onClick={() => handleParentCreateClick(user.id)}
                                                >
                                                    Parent
                                                </button>

                                                <button
                                                    className="bg-white shadow-lg px-3 py-2 rounded hover:bg-sky-500 hover:text-white mr-2"
                                                    onClick={() => handleEditClick(user.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="bg-white text-red-500 shadow-lg px-3 py-2 rounded hover:bg-red-400 hover:text-white mr-2"
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
            {/* {editUserId && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <EditUser
                            userId={editUserId}
                            onCancel={handleCancelEdit}
                            userData={studentsList.find(user => user.id === editUserId)}
                        />
                    </div>
                </div>
            )} */}
        </div>
        </TeacherLayout>
    );
};

export default List;

