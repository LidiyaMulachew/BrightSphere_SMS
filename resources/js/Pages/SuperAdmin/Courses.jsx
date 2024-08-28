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
        post('/courses/store', data);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Courses</h2>}
        >
        <div className='bg-white shadow-2xl ml-10 mr-10'>
        <div className=" mt-8 pt-10 text-center  text-sky-500 font-bold text-2xl ">

            <h1 >Create Courses</h1>
        </div>

            <div className="  ">
            <form onSubmit={handleSubmit} className=' ml-5 mr-5 mt-5'>


                <div className="mb-3">
                    <label htmlFor="course_name">Course Name:</label>
                    <input
                        id="course_name"
                        type="text"
                        className="mt-1 rounded block w-full"
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
                        className="mt-1 rounded block w-full mr-10"

                    />
                    {errors.course_id && <div>{errors.course_id}</div>}
                </div>

              
        <div className=" mt-8 text-center  text-blue-500 font-bold text-1xl ">

                <button type="submit" disabled={processing}        
                className="  py-2 px-4 rounded-md shadow-md bg-sky-100 hover:bg-sky-500 hover:text-white shadow-2xl mb-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl">Create</button>
        </div>

            </form>
        </div>

        </div>
        </AuthenticatedLayout>

    );
}
export default Courses;
