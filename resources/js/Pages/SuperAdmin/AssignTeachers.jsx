import React, { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AssignTeachers = ({ course, teachers }) => {
    const { props } = usePage();

    const { data, setData, post, processing } = useForm({
        teacher_ids: course.teachers.map(teacher => teacher.id), // Initialize with existing teacher IDs
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/courses/${course.id}/assign-teachers`);
    };

    const handleCheckboxChange = (teacherId) => {
        setData('teacher_ids', data.teacher_ids.includes(teacherId)
            ? data.teacher_ids.filter(id => id !== teacherId)
            : [...data.teacher_ids, teacherId]
        );
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
                        {teachers.map(teacher => (
                            <div key={teacher.id} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id={`teacher-${teacher.id}`}
                                    checked={data.teacher_ids.includes(teacher.id)}
                                    onChange={() => handleCheckboxChange(teacher.id)}
                                />
                                <label htmlFor={`teacher-${teacher.id}`} className="ml-2">
                                    {teacher.name}
                                </label>
                            </div>
                        ))}
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
