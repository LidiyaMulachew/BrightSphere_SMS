import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const GradeForm = () => {
    const { props } = usePage();
    console.log('Props:', props);

    // Access the correct keys
    const { courseId, studentId, assessmentWeightId } = props;

    const { data, setData, post, processing, errors } = useForm({
        grade: '',
        assessment_weight_id: assessmentWeightId,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/courses/${courseId}/students/${studentId}/grade/store`, {
            data: {
                grade: data.grade,
                assessment_weight_id: data.assessment_weight_id,
            },
        });
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Grade Form</h2>}
        >
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl mb-4">Grade Submission</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade:</label>
                        <input
                            type="text"
                            id="grade"
                            name="grade"
                            value={data.grade}
                            onChange={(e) => setData('grade', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                        {errors.grade && <p className="text-red-600 mt-1">{errors.grade}</p>}
                    </div>
                    <input
                        type="hidden"
                        name="assessment_weight_id"
                        value={data.assessment_weight_id}
                    />
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-400 text-white px-4 py-2 rounded mt-5"
                    >
                        {processing ? 'Submitting...' : 'Submit Grade'}
                    </button>
                </form>
            </div>
        </TeacherLayout>
    );
};

export default GradeForm;
