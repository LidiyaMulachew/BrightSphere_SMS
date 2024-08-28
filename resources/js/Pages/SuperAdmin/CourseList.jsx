import React, { useState, useEffect } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import axios from 'axios';
import EditCourse from './EditCourse';
import AssignTeachers from './AssignTeachers';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const CourseList = ({ courses }) => {
    const { props } = usePage();
    const [coursesState, setCourses] = useState(courses);

    const handleEditClick = (courseId) => {
        window.location.href = `/courses/${courseId}/edit`; 
    };

    const handleDelete = async (courseId) => {
        if (confirm('Are you sure you want to delete this course?')) {
            try {
                await axios.delete(`/courses/${courseId}`, {
                  
                });
                setCourses(coursesState.filter(course => course.id !== courseId));

            } catch (error) {
                console.error('Error deleting course:', error);
            }
            // window.location.href = `/courses`;
            window.location.reload();

        }
    };

        const handleTeacherCreateClick = (courseId) => {
            window.location.href = `courses/${courseId}/teachers`;
        };
        const handleButtonClick = (courseId) => {
            window.location.href = `/courses/${courseId}/teachers`;
        };
        
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Course Dashboard</h2>}
        >
            <Head title="Courses List" />
            <div className="container mx-auto p-4">
                
                <div className="mt-10  bg-white shadow-2xl pb-3 ml-5 mr-5 ">
                <div className="text-center mb-7 pt-10">
                    <h1 className="text-3xl font-bold mb-4 text-sky-600">Courses List</h1>
                </div>
                <Link href="/courses/create" className="bg-sky-200 ml-5 shadow-2xl px-4 py-2 hover:bg-sky-600 hover:text-white rounded">Create New Course</Link>
                    <table className="table mt-8 mb-10 table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                        <thead className="thead-light">
                            <tr>
                                <th className="py-2 px-4 border">Course ID</th>
                                <th className="py-2 px-4 border">Course Name</th>
                                <th className="py-2 px-4 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coursesState.map(course => (
                                <tr key={course.id}>
                                    <td className="py-2 px-4 border">{course.course_id}</td>
                                    <td className="py-2 px-4 border">{course.course_name}</td>
                                    <td className="px-3 py-4 border">
                                        <div className="flex justify-around ">
                                            <button
                                                className=" mr-2 bg-white shadow-md px-3 py-2  hover:bg-sky-500 rounded hover:text-white hover:shadow-2xl"
                                                onClick={() => handleTeacherCreateClick(course.id)}
                                                >
                                                Teachers
                                            </button>
                                            {/* <button
                                                className=" mr-2 bg-white shadow-xl px-3  hover:bg-sky-500 rounded hover:text-white hover:shadow-2xl"
                                                onClick={() => handleButtonClick(course.id)}
                                            >
                                                Details
                                            </button> */}
                                            <button
                                                className=" mr-2 bg-white shadow-md px-3  hover:bg-sky-500 rounded hover:text-white hover:shadow-2xl"
                                                onClick={() => handleEditClick(course.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className=" mr-2 bg-white text-red-500 shadow-md px-3  hover:bg-red-400 rounded hover:text-white hover:shadow-2xl"
                                                onClick={() => handleDelete(course.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CourseList;
