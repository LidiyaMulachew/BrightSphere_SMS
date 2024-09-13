import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';
import axios from 'axios'; // Make sure axios is imported

const AssessmentDetail = ({ assessmentWeights, students, course }) => {
    const { props } = usePage();

    if (!course) {
        return <div>Error: Course data is not available.</div>;
    }

    const deleteAssessmentWeight = async (id) => {
        if (confirm('Are you sure you want to delete this assessment weight?')) {
            try {
                await axios.delete(`/assessment-weights/${id}`);
                window.location.reload(); // Refresh the page
            } catch (error) {
                console.error('Error deleting the assessment weight!', error);
                alert('Error deleting the assessment weight. Please try again.');
            }
        }
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assessment Details</h2>}
        >
            <div className=" p-5 bg-white shadow-2xl ml-9 mr-9 rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-7 text-gray-600">Assessment Types and Weights For
                        <span className='text-sky-500'> {course.course_name}</span></h1>
                        <Link
                                            href={`/courses/${course.id}/assessment-weights/create`}
                                            className=" px-3 py-2 bg-sky-100  shadow-md rounded hover:bg-sky-500 hover:text-white mr-7 "
                                        >
                                            Add Assessment
                                        </Link>
                    <table className="min-w-full divide-y mt-7 divide-gray-200">
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
                                            href={`/courses/${course.id}/assessment-weights/${weight.id}/results`}
                                            className="text-sky-500 px-3 py-2 bg-white shadow-md rounded hover:bg-sky-500 hover:text-white mr-7 "
                                        >
                                            Enter Result
                                        </Link>
                                        <Link
                                            href={`/assessment-weights/${weight.id}/edit`}
                                            className="text-sky-500 px-3 py-2 bg-white shadow-md rounded hover:bg-sky-500 hover:text-white "
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteAssessmentWeight(weight.id)}
                                            className="text-red-500 px-3 py-2 bg-white shadow-md rounded hover:bg-red-400 hover:text-white ml-6"
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
