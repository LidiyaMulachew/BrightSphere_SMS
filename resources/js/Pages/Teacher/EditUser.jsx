import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const EditUser = ({ userId, onCancel, user }) => {
    const { props } = usePage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role] = useState(1); // Set role to Student only (1)

    // Set initial values when user prop changes
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleSave = async () => {
        try {
            await axios.put(`/studentslist/${user.id}`, { name, email, role });
            window.location.href = '/studentslist'; // Redirect to the /studentslist page
            onCancel();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
        >
            <div className='bg-white shadow-2xl pl-5 pr-5 ml-9 mr-9 pt-10 pb-10 mt-10'>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-700">Edit Student Account</h3>
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
                    <label className="block font-medium mb-2">Role:</label>
                    <p className="border border-gray-300 px-3 py-2 rounded-md w-full bg-gray-100 text-gray-600">Student</p>
                </div>
                <div className="flex justify-center">
                    <button
                        className="mt-5 py-2 px-4 rounded-md shadow-xl bg-sky-100 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
                        onClick={handleSave}
                    >
                        Update
                    </button>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default EditUser;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Head, usePage } from '@inertiajs/react';

// import TeacherLayout from '@/Layouts/TeacherLayout';

// const EditUser = ({ userId, onCancel, user }) => {
//     // const [name, setName] = useState(user.name);
//     // const [email, setEmail] = useState(user.email);
//     // const [role, setRole] = useState(user.role);
//     //     //for layout
//         const { props } = usePage();
//     //     //for layout

//     // const handleSave = async () => {
//     //     try {
//     //         await axios.put(`/users/${userId}`, { name, email, role });
//     //         onCancel();
//     //     } catch (error) {
//     //         console.error('Error updating user:', error);
//     //     }
//     // };

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [role, setRole] = useState(0); // Default role if necessary
//     // const [error, setError] = useState('');

//     // Set initial values when user prop changes
//     useEffect(() => {
//         if (user) {
//             setName(user.name);
//             setEmail(user.email);
//             setRole(user.role);
//         }
//     }, [user]);

//     const handleSave = async () => {
//         try {
//             await axios.put(`/studentslist/${user.id}`, { name, email, role });
//             window.location.href = '/studentslist'; // Redirect to the /users page
//             onCancel();
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     return (
//         <TeacherLayout
//         user={props.auth.user}
//         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
//     >
//        <div className='bg-white shadow-2xl pl-5 pr-5 ml-9 mr-9 pt-10 pb-10 mt-10'>
//             <h3 className="text-xl font-bold mb-4 text-center text-gray-700 ">Edit Students Account</h3>
//             <div className="mb-4">
//                 <label htmlFor="name" className="block font-medium mb-2">Name:</label>
//                 <input
//                     id="name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="border border-gray-300 px-3 py-2 rounded-md w-full"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="email" className="block font-medium mb-2">Email:</label>
//                 <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="border border-gray-300 px-3 py-2 rounded-md w-full"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="role" className="block font-medium mb-2">Role:</label>
//                 <select
//                     id="role"
//                     value={role}
//                     onChange={(e) => setRole(parseInt(e.target.value))}
//                     className="border border-gray-300 px-3 py-2 rounded-md w-full"
//                 >
//                     <option value={1}>Student</option>
//                     <option value={3}>Parent</option>
//                 </select>
//             </div>
//             <div className="flex justify-center">
//                 {/* <button
//                     className="py-2 px-4 rounded-md mr-5 shadow-xl bg-sky-100 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
//                     onClick={onCancel}
//                 >
//                     Cancel
//                 </button> */}
//                 <button
//                     className="mt-5 py-2 px-4 rounded-md shadow-xl bg-sky-100 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
//                     onClick={handleSave}
//                 >
//                     Update
//                 </button>
//             </div>
//         </div>
//         </TeacherLayout>

//     );
// };

// export default EditUser;

