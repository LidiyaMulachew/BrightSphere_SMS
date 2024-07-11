import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowUser = ({ userId }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/users/${userId}`); 
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [userId]);

    if (!userData) return null; 

    return (
        <div>
            {/* <h2>User Details</h2> */}
            {/* <p>ID: {userData.id}</p> */}
            {/* <p>Name: {userData.name}</p> */}
            {/* <p>Email: {userData.email}</p> */}
        </div>
    );
};

export default ShowUser;
