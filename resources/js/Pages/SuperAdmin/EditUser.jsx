import React, { useState } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';

const EditUser = ({ userId, onCancel, userData }) => {
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [role, setRole] = useState(userData.role);

    const handleSave = async () => {
        try {
            await axios.put(`/users/${userId}`, { name, email, role });
            onCancel();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    console.log('EditUser component rendered');

    return (
        <div className="container mx-auto p-4">
            <Head title="Edit User" />
            <h3 className="text-xl font-bold mb-4">Edit User</h3>
            <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="block font-medium mb-2">Role:</label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(parseInt(e.target.value))}
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                >
                    <option value="0">Super Admin</option>
                    <option value="2">Teacher</option>
                </select>
            </div>
            <div className="flex justify-end">
                <button
                    className="btn btn-secondary mr-2"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditUser;
