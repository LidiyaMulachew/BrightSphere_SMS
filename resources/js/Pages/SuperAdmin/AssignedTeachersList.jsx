import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

const AssignedTeachersList = ({ course, teachers }) => {
    const { props } = usePage();

    // Form handling for unassigning teachers
    const { delete: unassignTeacher } = useForm();

    const handleUnassign = (teacherId) => {
        // Confirm before sending the request
        if (confirm('Are you sure you want to unassign this teacher?')) {
            unassignTeacher(route('courses.unassign', { course: course.id }), {
                method: 'DELETE',
                data: { teacher_ids: [teacherId] },
                onSuccess: () => {
                    // add success handling here
                },
                onError: () => {
                    // add  error handling here
                }
            });
        }
    };
    // console.log('teacherId:' ,teachers);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assign Teacher</h2>}
        >
            <Head title={`Teachers for ${course.course_name}`} />
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">
                        Teachers for Course: 
                        <span className="text-blue-500">{course.course_name}</span>
                    </h1>
                    
                    {teachers.length === 0 ? (
                        <p>No teachers assigned to this course.</p>
                    ) : (
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 border">Name</th>
                                    <th className="py-3 px-4 border">Email</th>
                                    <th className="py-3 px-4 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map(teacher => (
                                    <tr key={teacher.id}>
                                    {/* <td className="px-3 py-4 border">{index + 1}</td> */}

                                        <td className="py-3 px-4 border">
                                            <span className="text-blue-500">{teacher.name}</span>
                                        </td>
                                        <td className="py-3 px-4 border">{teacher.email}</td>
                                        <td className="py-3 px-4 border">
                                            <button
                                                onClick={() => handleUnassign(teacher.id)}
                                                className="py-1 px-2 text-red-500 hover:bg-red-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                            >
                                                Unassign
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="text-center mt-9">
                        <a href={route('courses.index')} className="mt-5 py-2 px-3 rounded-md shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center">Back to Courses</a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AssignedTeachersList;
