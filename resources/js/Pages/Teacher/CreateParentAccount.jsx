import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import TeacherLayout from '@/Layouts/TeacherLayout';

const CreateParentAccount = ({ studentId }) => {
    const { props } = usePage();
    const [student, setStudent] = useState([studentId]);

    // const [student, setStudent] = useState(null);
    console.log('student:', student);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '', 
        student_id: studentId,
        teacher_id: '', 
    });


    useEffect(() => {
        fetchStudent();

}, []);
console.log('ok');


    const fetchStudent = async () => {
        try {
            // const response = await axios.get(`/users`); // Adjust API endpoint as per your Laravel route

            const response = await axios.get(`/parent/create/${studentId}`); // Adjust API endpoint as per your Laravel route
            
            if (!response.data) {

                throw new Error('Student not found');
            }

            setStudent(response.data);

            setFormData({ ...formData, teacher_id: response.data.teacher_id }); // Set teacher_id after fetching student details
        } catch (error) {

            console.error('Error fetching student:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('/parent/store', formData); 

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
                        {/* <p>Email: {student.email}</p> */}
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
                        className="mt-1 block w-full"

                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Parent Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                        className="mt-1 block w-full"

                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={formData.password}
                        className="mt-1 block w-full"

                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password_confirmation">Confirm Password:</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            value={formData.password_confirmation}
                        className="mt-1 block w-full"

                            onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mt-4">

                    <select
                        id="role"
                        type="role"
                        value={formData.role}
                        className="mt-1 block w-full"

                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        required
                        >
                        <option value="">Select a role</option>
                        <option value="1">Student</option>
                        <option value="3">Parent</option>
                    </select>

                </div>
                <div className="flex items-center justify-center mt-4">

                    <button type="submit" className="btn btn-primary btn-sm mr-2"
                    >Register</button>
                </div>
                
                </form>
            </GuestLayout>

            </div>
            
        </TeacherLayout>
    );
};

export default CreateParentAccount;
