import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from "@inertiajs/react";
import axios from "axios";

const EditCourse = () => {
    const { props } = usePage();
    const { course, course_id ,courseId } = props;
    const { data, setData, put, processing, errors } = useForm({
        course_id: '',
        course_name: '',
        id: course_id,

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/courses/${course.id}`, data)

            .then(response => {
                
                console.log('Course updated successfully!');
                window.location.href = `/courses`;
            })
            .catch(error => {
                console.error('There was an error updating the course:', error);
            });
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Course</h2>}
        >
            <Head title="Edit Course" />
            <div className="max-w-2xl mx-auto p-10 bg-white shadow-md rounded-lg mt-8">
                <form onSubmit={handleSubmit}>

                <div className="mb-3">
                        <label htmlFor="course_name">Course Name:</label>
                        <input
                            id="course_name"
                            type="text"
                            value={data.course_name}
                            onChange={e => setData('course_name', e.target.value)}
                        />
                        {errors.course_name && <div className="text-red-500">{errors.course_name}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="course_id">Course Code:</label>
                        <input
                            id="course_id"
                            type="text"
                            value={data.course_id}
                            onChange={e => setData('course_id', e.target.value)}
                        />
                        {errors.course_id && <div className="text-red-500">{errors.course_id}</div>}
                    </div>



                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="py-2 px-4 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCourse;
