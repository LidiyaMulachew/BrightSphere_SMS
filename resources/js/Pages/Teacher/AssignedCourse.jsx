import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const AssignedCourse = ({ courses }) => {
    const { props } = usePage();

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assigned Courses</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4 text-gray-600 ">Create Assessment for Assigned Courses</h1>
                    <table className="min-w-full bg-white border border-gray-300 pb-10 rounded-lg shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Course Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course => (
                                <tr key={course.id} className="hover:bg-gray-50 ">
                                    <td className="px-6 py-4 pb-5 pt-5 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                                        {course.course_name}
                                    </td>
                                    <td className="px-6 py-4 pb-5 pt-5 whitespace-nowrap text-sm font-medium border-b">
                                        <Link
                                            href={`/courses/${course.id}/assessment-weights/create`}
                                            className="bg-sky-100  px-4 py-2 rounded  hover:text-white hover:bg-sky-500 "
                                        >
                                            Create Assessment
                                        </Link>
                                        <Link
                                            href={`/courses/${course.id}/assessment-weights`}
                                            className="bg-sky-100  px-4 py-2 rounded  hover:text-white hover:bg-sky-500  ml-2"
                                        >
                                            Assessment Type
                                        </Link>
                                        {/* <Link
                                            href={`/courses/${course.id}/assessment-records`}
                                            className="bg-gray-200 text-blue-600 px-4 py-2 rounded   hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                                        >
                                            Record
                                        </Link> */}
                                        <Link
                                            href={`/student-assessment-results/${course.id}`}
                                            className="bg-sky-100  px-4 py-2 rounded  hover:text-white hover:bg-sky-500  ml-2"
                                        >
                                            Students Result
                                        </Link>
                                        <Link
                                            href={`/courses/${course.id}/grades`}
                                            className="bg-sky-100  px-4 py-2 rounded  hover:text-white hover:bg-sky-500  ml-2"
                                        >
                                            Grade
                                        </Link>
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
