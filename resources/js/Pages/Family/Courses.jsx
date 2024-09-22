import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import FamilyLayout from '@/Layouts/FamilyLayout';

const Courses = () => {
  const { props } = usePage();
  const { courses } = props;
  const [selectedCourseId, setSelectedCourseId] = useState('');

  const handleCourseChange = (e) => {
      setSelectedCourseId(e.target.value);
  };

  const handleViewClick = () => {
      if (selectedCourseId) {
          // Redirect to the page showing results for the selected course
          window.location.href = `/family/courses/${selectedCourseId}/results`;
          // <Link href={`/family/courses/${course.id}/results`} className="text-blue-600 hover:underline">

      }
  };

  return (
    <FamilyLayout
      user={usePage().props.auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}
    >
        <div className="ml-9 mr-9 mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="text-center mb-10 mt-3 text-blue-500">
                    <h1 className="text-2xl font-bold mb-4">Select a Course</h1>
                </div>

                <div className="text-center mb-10">
                    <select
                        name="courses"
                        id="courseSelect"
                        className="w-full block border border-gray-300 rounded-lg p-2  px-9"
                        value={selectedCourseId}
                        onChange={handleCourseChange}
                    >
                        <option value="">Select a course...</option>
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.course.course_name}
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
                        className="bg-sky-200 shadow-lg hover:bg-sky-500 hover:text-white px-4 py-2 rounded"
                        disabled={!selectedCourseId}
                    >
                        View
                    </button>
                </div>
            </div>
    </FamilyLayout>
  );
};

export default Courses;
