import React, { useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const Assessment = () => {
    const { props } = usePage();
    const { courses } = props;
    const [selectedCourseId, setSelectedCourseId] = useState('');

    const handleCourseChange = (e) => {
        setSelectedCourseId(e.target.value);
    };

    const handleViewClick = () => {
        if (selectedCourseId) {
            // Redirect to the page showing results for the selected course
            window.location.href = `/courses/${selectedCourseId}/results`;
        }
    };

    return (
        <StudentLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student Results</h2>}
        >
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="text-center mb-10 mt-3 text-blue-500">
                    <h1 className="text-2xl font-bold mb-4">Select a Course</h1>
                </div>

                <div className="text-center mb-10">
                    <select
                        name="courses"
                        id="courseSelect"
                        className="border border-gray-300 rounded-lg p-2  px-9"
                        value={selectedCourseId}
                        onChange={handleCourseChange}
                    >
                        <option value="">Select a course...</option>
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.course_name}
                                </option>
                            ))
                        ) : (
                            <option value="">No courses available</option>
                        )}
                    </select>
                </div>

                <div className="text-center mb-10">
                    <button
                        onClick={handleViewClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={!selectedCourseId}
                    >
                        View
                    </button>
                </div>
            </div>
        </StudentLayout>
    );
};

export default Assessment;
