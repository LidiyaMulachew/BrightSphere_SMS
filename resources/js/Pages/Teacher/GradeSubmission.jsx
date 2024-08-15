import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const GradeSubmission = ({ courseId, students }) => {
    const { props } = usePage();

    // console.log(students);

    if (!Array.isArray(students)) {
        return <p>Error: Data is not in the expected format.</p>;
    }

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Grade Submission</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Grade Submission {courseId}</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Student Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Final Score
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map(student => (
                            <tr key={`${student.id}-${student.final_score}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {student.name} {/* Display student name */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {student.final_score}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <Link
                                        href={`/courses/${courseId}/students/${student.id}/grade`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Grade
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TeacherLayout>
    );
};

export default GradeSubmission;
