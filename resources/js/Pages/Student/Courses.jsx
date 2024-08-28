import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const Courses = () => {
    const { courses } = usePage().props;
    console.log(courses)

    return (
        <StudentLayout
            user={usePage().props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}
        >
            <div className=" mx-auto p-5 bg-white shadow-2xl ml-9 mr-9 rounded-lg mt-8">
                <div className="text-center mb-10 mt-3 text-blue-500">
                    <h1 className="text-2xl font-bold mb-4">Courses</h1>
                </div>

                {courses.length > 0 ? (
                    <ul>
                        {courses.map((course) => (
                            <li key={course.id} className="mb-6 border shadow-lg hover:bg-sky-400 hover:text-white rounded-lg p-4">
                                <Link href={`/courses/${course.id}`}>
                                    <h3 className="text-lg mb-3">{course.course_name}</h3>
                                </Link>
                                {/* Add more course details here */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No courses available.</p>
                )}
            </div>
        </StudentLayout>
    );
};

export default Courses;

