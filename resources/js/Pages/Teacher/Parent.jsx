import React from 'react';
import { usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const Parent = () => {
    // Extract data from Inertia's page props
    const { student, parent } = usePage().props;
    const { props } = usePage();

console.log('student:', student)
console.log('parent:', parent)

    return (
        <TeacherLayout
            user={props.auth.user} 
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student and Parent Information</h2>}
        >
            <div className="bg-gray-100 flex items-center justify-center ">
            <div className="w-full max-w-screen-xl pt-5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* <div className="container"> */}
            <div className="container mx-auto p-4">
            <div className="mb-4 text-center">

            <h1 className="text-2xl font-bold mb-4 text-blue-500">Student Information</h1>
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
