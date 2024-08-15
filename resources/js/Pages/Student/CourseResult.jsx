import React from 'react';
import { usePage } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const CourseResult = () => {
    const { props } = usePage();
    const { course } = props;

    const finalScore = course?.final_score || ' ';
    const grade = course?.grade || ' ';

    return (
        <StudentLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Course Results</h2>}
        >
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl mb-4">{course?.course_name || 'Course Name'}</h1>
                
                {course?.assessment_records && course.assessment_records.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Assessment Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Weight
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Score
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {course.assessment_records.map(record => (
                                <tr key={record.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.assessment_weight_type} 
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.assessment_weight_weight} 
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.score}
                                    </td>
                                </tr>
                            ))}

                            {/* Add Final Score and Grade Rows */}
                            <tr className="bg-gray-50 font-semibold">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Final Score
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* Empty or you might need to fill this based on design */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {finalScore}
                                </td>
                            </tr>
                            <tr className="bg-gray-50 font-semibold">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Grade
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* Empty or you might need to fill this based on design */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {grade}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>No assessment records available.</p>
                )}
            </div>
        </StudentLayout>
    );
};

export default CourseResult;
