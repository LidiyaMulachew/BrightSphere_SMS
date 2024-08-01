import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AssignTeacher = ({ course }) => {
    const { props } = usePage();

    const { data, setData, post, processing } = useForm({
        teacher_email: '', 
        course_id: course.id
    });
    console.log('course:' ,course);
    console.log('Form Data:', data); // Check the entire form data object


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitting teacher_email:', data.teacher_email); // Debugging statement

        post(`/courses/${course.id}/assign`, {
            teacher_email: data.teacher_email, // Send single email
            
        });
    };

    const handleInputChange = (e) => {
        setData('teacher_email', e.target.value); // Update the state
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assign Teacher</h2>}
        >
            <Head title="Assign Teacher" />
            <div className="max-w-2xl mx-auto p-10 bg-white shadow-md rounded-lg mt-8">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold mb-4">Assign Teacher to Course: {course.course_name}</h3>

                    <div className="mb-4">
                        <label htmlFor="teacher_email" className="block text-sm font-medium text-gray-700">Teacher Email:</label>
                        <input
                            id="teacher_email"
                            name="teacher_email"
                            type="email"
                            value={data.teacher_email}
                            onChange={handleInputChange}
                            placeholder="Enter teacher's email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="py-2 px-4 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AssignTeacher;
