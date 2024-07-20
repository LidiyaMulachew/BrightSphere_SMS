import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ userId, onCancel }) => {
    const [userData, setUserData] = useState(null); 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/users/${userId}`);
                setUserData(response.data); 
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    password: '', 
                    role: response.data.role.toString(), 
                });
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser(); 
    }, [userId]); 

    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/users/${userId}`, formData); 
            console.log(`User with ID ${userId} updated successfully`);
            onCancel(); 
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    // if (!userData) return <p>Loading...</p>;

    return (
        <div style={{ width: '700px', height: '550px' }}>
            <div className="text-center mb-10 mt-3">
                <h2 className="text-2xl font-bold text-gray-600">Edit User Account</h2>
            </div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '700px', padding: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
                <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px' }}
                />

                <label htmlFor="email" style={{ marginBottom: '8px', display: 'block' }}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px' }}
                />

                <label htmlFor="password" style={{ marginBottom: '8px', display: 'block' }}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px' }}
                />

                <label htmlFor="role" style={{ marginBottom: '8px', display: 'block' }}>Role:</label>
                <select
                    id="role"
                    name="role"
                    value={formData.role}
                    className="mt-1 block w-full"
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select a role</option>
                    <option value="0">Super Admin</option>
                    <option value="1">Student</option>
                    <option value="2">Teacher</option>
                    <option value="3">Parent</option>
                </select>

                <div style={{ marginTop: '16px' }}>
                    <button type="submit" style={{ marginRight: '28px', padding: '8px 16px', borderRadius: '4px' }}>Update</button>
                    <button type="button" onClick={onCancel} style={{ padding: '8px 16px', borderRadius: '4px' }}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
