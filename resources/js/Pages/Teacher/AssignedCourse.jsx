import React from 'react';
import { usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const AssignedCourse = ({ courses }) => {
    const { props } = usePage();

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assigned Courses</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">Create Assessment for Assigned Courses</h1>
                    <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                        <thead className="thead-light">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    Course Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {courses.map(course => (
                                <tr key={course.id}>
                                    <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">
                                        {course.course_name}
                                    </td>
                                    <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => window.location.href = `/courses/${course.id}/assessment-weights/create`}
                                            className="bg-gray-200 text-blue px-4 py-2 rounded border border-gray-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            Create Assessment
                                        </button>
                                        <button
                                            onClick={() => window.location.href = `/courses/${course.id}/assessment-weights`}
                                            className="bg-gray-200 text-blue px-4 py-2 rounded border border-gray-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                                        >
                                            Detail
                                        </button>
                                        <button
                                            onClick={() => window.location.href = `/courses/${course.id}/assessment-records`}
                                            className="bg-gray-200 text-blue px-4 py-2 rounded border border-gray-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                                        >
                                            Record
                                        </button>
                                        <button
                                            onClick={() => window.location.href = `/student-assessment-results/${course.id}`}
                                            className="bg-gray-200 text-blue px-4 py-2 rounded border border-gray-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                                        >
                                            Student Results
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default AssignedCourse;
