import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import TeacherLayout from '@/Layouts/TeacherLayout';

const CreateParentAccount = ({ studentId }) => {
    const { props } = usePage();
    const [student, setStudent] = useState();
    // const { student, parent } = usePage().props;

// console.log('student:', student)

    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        password: '',
        password_confirmation: '',
        student_id: studentId,

       
    });
    useEffect(() => {
        if (studentId) {
            fetchStudent();

        }
    }, [studentId]);

    const fetchStudent = async () => {
        try {
            const response = await axios.get(`/parent/create/${studentId}`);

            if (!response.data) {

                throw new Error('Student not found');
            }

            setStudent(response.data);
            setFormData({ ...formData, teacher_id: response.data.teacher_id });
        } catch (error) {
            console.error('Error fetching student:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/parent/store', {
                ...formData,
                role: 3, // Hardcode the role using the constant defined in Laravel
            });
            console.log('Redirecting to:', `/parent/${studentId}`);
            window.location.href = `/parent/${studentId}`;

            console.log('Parent account created successfully:', response.data);
        } catch (error) {
            console.error('Error creating parent account:', error);
        }
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Parent Account</h2>}
        >
            <div className="container  ">
                <div className=' bg-white shadow-2xl ml-9 pl-5 pr-5 mr-9'>

                
            <div className="mt-9 pt-5 text-center">          

                <h1 className="text-2xl font-bold mb-2 text-blue-500">Parent</h1>
            </div>
              
                {/* {student && (
                    <div>
                        <h2 className="text-2xl font-bold">Student: {student.name}</h2>
                        <h2 className="text-2xl font-bold">Email: {student.email}</h2>
                    </div>
                )}  */}
                   
               
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Parent Name:</label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="mt-1 block w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Parent Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-1 block w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="mt-1 block w-full"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password_confirmation">Confirm Password:</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={formData.password_confirmation}
                                onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                                className="mt-1 block w-full"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <button type="submit" className="mb-10 px-3 py-2 bg-sky-200 rounded shadow-lg hover:bg-sky-500 hover:text-white mr-2">Register</button>
                        </div>
                    </form>
                    </div>
            </div>
        </TeacherLayout>
    );
};

export default CreateParentAccount;
