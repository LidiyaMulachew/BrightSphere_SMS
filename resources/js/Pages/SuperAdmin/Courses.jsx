import React, { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CourseList from './CourseList';


const Courses = ({ }) => {
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    
            //for layout
            const { props } = usePage();
            //for layout
    const { data, setData, post, processing, errors } = useForm({
        course_id: '',
        course_name: '',
        // teachers: []
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        get('/courses/create', data);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Courses</h2>}
        >
        <div>
        <div className=" mt-8 text-center  text-blue-500 font-bold text-2xl ">

            <h1 >Create Courses</h1>
        </div>

            <div className="max-w-2xl max-h-8xl mx-auto p-10 bg-white shadow-md rounded-lg mt-8">
            <form onSubmit={handleSubmit}>


                <div className="mb-3">
                    <label htmlFor="course_name">Course Name:</label>
                    <input
                        id="course_name"
                        type="text"
                        value={data.course_name}
                        onChange={e => setData('course_name', e.target.value)}
                    />
                    {errors.course_name && <div>{errors.course_name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="course_id">Course Code:</label>
                    <input
                        id="course_id"
                        type="text"
                        value={data.course_id}
                        onChange={e => setData('course_id', e.target.value)}
                    />
                    {errors.course_id && <div>{errors.course_id}</div>}
                </div>

              
        <div className=" mt-8 text-center  text-blue-500 font-bold text-1xl ">

                <button type="submit" disabled={processing}        
                className="  py-2 px-4 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl">Create</button>
        </div>

            </form>
        </div>

        </div>
        </AuthenticatedLayout>

    );
}
export default Courses;
