import React from 'react';
import axios from 'axios';
import { Link, usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const AssessmentDetail = ({ assessmentWeights }) => {
    const { props } = usePage();

    const deleteAssessmentWeight = async (id) => {
        if (confirm('Are you sure you want to delete this assessment weight?')) {
            try {
                await axios.delete(`/assessment-weights/${id}`);
                
                window.location.reload(); // Refreshes the page to reflect the deletion
                
            } catch (error) {
                console.error('There was an error deleting the assessment weight!', error);

                alert('Error deleting the assessment weight. Please try again.');
            }
        }
    };
    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assessment Details</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">Assessment Types and Weights</h1>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Assessment Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Weight
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {assessmentWeights.map(weight => (
                                <tr key={weight.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {weight.assessment_type}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {weight.weight}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <Link
                                            href={`/assessment-weights/${weight.id}/edit`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteAssessmentWeight(weight.id)}
                                            className="text-red-500 ml-6"
                                        >
                                            Delete
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

export default AssessmentDetail;
