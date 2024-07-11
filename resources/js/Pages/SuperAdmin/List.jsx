import React, { useState } from 'react';
import EditUser from './EditUser';
import axios from 'axios';

const List = ({ users }) => {
    const [editUserId, setEditUserId] = useState(null); // State to track which user's edit form is open
    const [usersList, setUsersList] = useState(users); // State to store the list of users

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
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container">
                    <div className="text-center mb-7 mt-1">
                    <h2 className="text-2xl font-bold text-gray-600">User Account List</h2>
                    </div>
                    <div className="overflow-x-auto">
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
                                {Array.isArray(usersList) && usersList.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 border">{index + 1}</td>
                                        <td className="px-24 py-4 border">{user.name}</td>
                                        <td className="px-24 py-4 border">{user.email}</td>
                                        <td className="px-24 py-4 border">{getRoleText(user.role)}</td>
                                        <td className="px-16 py-4 border">
                                            <div className="flex justify-around">
                                                
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
                           
                            userData={usersList.find(user => user.id === editUserId)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
