import React from 'react';
import { usePage } from '@inertiajs/react';
import FamilyLayout from '@/Layouts/FamilyLayout';

const Results = () => {
    const { course, results } = usePage().props;

    // Assuming results is an array of students, so you may need to display the name of the first student or handle it differently
    const studentName = results.length > 0 ? results[0].student_name : 'No student'; 

    return (
        <FamilyLayout
            user={usePage().props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Course Results</h2>}
        >
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
            <h1 className="text-2xl font-bold mb-4 mt-8 ml-20">
                    <span className="text-blue-500">{course.course_name}</span> <span className='text-gray-500'>Assessment Results For</span> <span className="text-yellow-500">{studentName}</span>
                </h1>

                {results.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200 ">
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
                        <tbody className="bg-white divide-y divide-gray-200 mr-20">
                            {results.map(student => (
                                <React.Fragment key={student.student_id}>
                                    {student.assessment_records.map(record => (
                                        <tr key={record.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {record.assessment_weight_type}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {record.assessment_weight_weight}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {record.score}
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    {/* Add Final Score and Grade Rows only once per student */}
                                    <tr className="bg-gray-50 font-semibold">
                                        <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                                            Final Score
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {student.final_score}
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50 font-semibold">
                                        <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                                            Grade
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {student.grade || ' '}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No results found for this course.</p>
                )}
            </div>
        </FamilyLayout>
    );
};

export default Results;
