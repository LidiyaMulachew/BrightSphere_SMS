import React from 'react';
import { usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const StudentResultList = () => {
    const { props } = usePage();
    const { assessmentRecords, assessmentTypes } = props;

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student Result List</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">Student Result List</h1>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                                {assessmentTypes.map(({ type, weight }) => (
                                    <th key={type} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {type} ({weight}%)
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Object.entries(assessmentRecords).map(([studentId, { studentName, records }]) => (
                                <tr key={studentId}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{studentName}</td>
                                    {assessmentTypes.map(({ type }) => {
                                        const record = records[type] || {};
                                        return (
                                            <td key={type} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {record ? (
                                                    <>
                                                        <div> {record.score}</div>
                                                    </>
                                                ) : (
                                                    <div>-</div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default StudentResultList;
