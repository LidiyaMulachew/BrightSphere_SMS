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
            window.location.href = `/courses`;

        }
    };

        const handleTeacherCreateClick = (courseId) => {
            window.location.href = `courses/${courseId}/assign-teachers`;
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
                <div className="text-center mb-7 mt-1">
                    <h1 className="text-2xl font-bold mb-4 text-blue-500">Courses List</h1>
                </div>
                <Link href="/courses/create" className="bg-blue-200 px-4 py-2 rounded">Create New Course</Link>
                <div className="mt-4">
                    <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
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
                                        <div className="flex justify-around">
                                            <button
                                                className="btn btn-warning btn-sm mr-2"
                                                onClick={() => handleTeacherCreateClick(course.id)}
                                                >
                                                Teachers
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm mr-2"
                                                onClick={() => handleButtonClick(course.id)}
                                            >
                                                Details
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm mr-2"
                                                onClick={() => handleEditClick(course.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
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
