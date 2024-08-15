import React, { useState, useEffect } from 'react';
import { useForm , usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const EnterResult = ({ assessments, student, courseId }) => {
    const { props } = usePage();

    const { data, setData, post, processing, errors } = useForm({
        assessment_type: '',
        result: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/courses/${courseId}/assessment-records/${student.id}/store`);
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enter Result</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">Enter Result for {student.name}</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="assessment_type" className="block text-sm font-medium text-gray-700">
                                Assessment Type
                            </label>
                            <select
                                id="assessment_type"
                                name="assessment_type"
                                value={data.assessment_type}
                                onChange={(e) => setData('assessment_type', e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">Select an Assessment</option>
                                {assessments.map((assessment) => (
                                    <option key={assessment.id} value={assessment.id}>
                                        {assessment.assessment_type} - {assessment.weight}%
                                    </option>
                                ))}
                            </select>
                            {errors.assessment_type && <p className="text-red-500 text-xs mt-2">{errors.assessment_type}</p>}
                        </div>
                        <div>
                            <label htmlFor="result" className="block text-sm font-medium text-gray-700">
                                Result
                            </label>
                            <input
                                id="result"
                                name="result"
                                type="number"
                                step="0.01"
                                min="0"
                                max="100"
                                value={data.result}
                                onChange={(e) => setData('result', e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.result && <p className="text-red-500 text-xs mt-2">{errors.result}</p>}
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={processing}
                        >
                            Save Result
                        </button>
                    </form>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default EnterResult;
