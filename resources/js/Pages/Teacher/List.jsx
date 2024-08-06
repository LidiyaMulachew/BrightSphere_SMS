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
   
        window.location.href = `/parent/create/${studentId}`;


    };


    useEffect(() => {
        // console.log('studentsList:', studentsList);
    }, [studentsList]);


    const handleEditClick = (userId) => {
        setEditUserId(userId);
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

        <div className="bg-gray-100 flex items-center justify-center ">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container mx-auto p-4">
                    <div className="text-center mb-7 mt-1">
                        <h2 className="text-2xl font-bold text-gray-600">User Account List</h2>
                    </div>
                <Link href="/registerstudents" className="bg-blue-200 px-4 py-2 rounded">Create Account</Link>

                    <div className="mt-4">
                        <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
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
                                                    className="btn btn-warning btn-sm mr-2"
                                                    onClick={() => handleParentCreateClick(user.id)}
                                                >
                                                    Parent
                                                </button>

                                                <button
                                                    className="btn btn-warning btn-sm mr-2"
                                                    onClick={() => handleEditClick(user.id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
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
                            userData={studentsList.find(user => user.id === editUserId)}
                        />
                    </div>
                </div>
            )}
        </div>
        </TeacherLayout>
    );
};

export default List;

