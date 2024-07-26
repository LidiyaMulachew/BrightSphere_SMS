import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import TeacherLayout from '@/Layouts/TeacherLayout';

const CreateParentAccount = ({ studentId }) => {
    const { props } = usePage();
    const [student, setStudent] = useState(null);
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
    console.log('formData:', formData);
    console.log('student:', student);


    const fetchStudent = async () => {
        try {

            const response = await axios.get(`/parent/create/${studentId}`);
            console.log ('yes');

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
            <div className="container mx-auto">
                {student && (
                    <div>
                        <h2 className="text-2xl font-bold">Student: {student.name}</h2>
                        <h2 className="text-2xl font-bold">Email: {student.email}</h2>
                    </div>
                )}

                <GuestLayout>
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
                            <button type="submit" className="btn btn-primary btn-sm mr-2">Register</button>
                        </div>
                    </form>
                </GuestLayout>
            </div>
        </TeacherLayout>
    );
};

export default CreateParentAccount;
