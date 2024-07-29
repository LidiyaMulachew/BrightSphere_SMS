import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AssignTeachers = ({ course, teachers }) => {
    const { props } = usePage();

    const { data, setData, post, processing } = useForm({
        teacher_emails: '', // Use email input field
        course_id: course.id
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Split emails and trim whitespace
        const emailArray = data.teacher_emails.split(',').map(email => email.trim());
        // Get teacher IDs from emails
        const teacherIds = teachers.filter(teacher => emailArray.includes(teacher.email)).map(teacher => teacher.id);

        // Submit form with teacher IDs
        post(`/courses/${course.id}/assign-teachers`, {
            teacher_ids: teacherIds,
        });
    };

    const handleInputChange = (e) => {
        setData('teacher_emails', e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assign Teachers</h2>}
        >
            <Head title="Assign Teachers" />
            <div className="max-w-2xl mx-auto p-10 bg-white shadow-md rounded-lg mt-8">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold mb-4">Assign Teachers to Course: {course.course_name}</h3>

                    <div className="mb-4">
                        <label htmlFor="teacher_emails" className="block text-sm font-medium text-gray-700">Teacher Emails (comma-separated):</label>
                        <input
                            id="teacher_emails"
                            name="teacher_emails"
                            type="text"
                            value={data.teacher_emails}
                            onChange={handleInputChange}
                            placeholder="Enter teacher emails separated by commas"
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

export default AssignTeachers;
