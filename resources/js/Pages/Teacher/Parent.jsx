import React, { useState, useEffect } from 'react';
import { usePage,Link } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const Parent = () => {
    // Extract data from Inertia's page props
    const { student, parent } = usePage().props;
    // const [usersList, setUsersList] = useState([]);
    // const user = usePage().props.auth.user; // Extract user from props
    // const user = props.auth.user; // Extract user from props
    // const {auth}=usePage().props;
    // const [usersList, setUsersList] = useState([]);
    console.log(student)
    // var user=auth.user;
    const studentId = student ? student.id : null;
    const { props } = usePage();

    const handleParentCreateClick = (studentId) => {
   
        window.location.href = `/parent/create/${studentId}`;
        // window.location.href = `/parent/${studentId}`;


    };

    return (
        <TeacherLayout
            user={props.auth.user} 
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student and Parent Information</h2>}
        >
            <div className="bg-gray-100 flex items-center justify-center ">
            <div className="w-full max-w-screen-xl pt-5">
            <div className="bg-white ml-10 mr-8 p-6 rounded-lg shadow-2xl">
                {/* <div className="container"> */}
            <div className="container mx-auto p-4">
            <div className="mb-4 text-center">

            <h1 className="text-2xl font-bold mb-4 text-blue-500">Student Information</h1>
            <div className='flex justify-end'>
            {/* <Link href="/parent/create/{studentId}" className="bg-sky-200 ml-5 shadow-2xl px-4 py-2 hover:bg-sky-600 hover:text-white rounded">Create New Course</Link> */}

            <button
                className="bg-sky-200 shadow-lg px-3 py-2 rounded hover:bg-sky-500 hover:text-white mr-2"
                onClick={() => handleParentCreateClick(studentId)}
            >
                Add Parent
            </button>
            </div>

            </div>

                <div className="mb-4">
                    
                    <h2 className="text-xl font-semibold text-blue-900">Student:</h2>
                    <div className="ml-10 ">
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                </div>

                </div>

                <h2 className="text-xl font-semibold mb-2 text-blue-900">Parent:</h2>
                {parent.length > 0 ? (
                    <ul>
                        {parent.map((parent, index) => (
                            <li key={index} className="mb-2 ml-10">
                                <p><strong>Name:</strong> {parent.name}</p>
                                <p><strong>Email:</strong> {parent.email}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No parents associated with this student.</p>
                )}
                </div>
            </div>
            </div>
            </div>

        </TeacherLayout>
    );
};

export default Parent;
