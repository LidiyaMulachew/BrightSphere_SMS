import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const CreateAssessmentWeights = ({ course, course_id }) => {
    const { props } = usePage();

    const { data, setData, post, processing, errors } = useForm({
        course_id: course.id,
        assessment_type: '',
        weight: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('assessmentWeights.store'));
    };

    return (
        <TeacherLayout>
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Create Assessment Weight for {course.name}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="assessment_type" className="block text-gray-700">Assessment Type</label>
                        <input
                            id="assessment_type"
                            name="assessment_type"
                            type="text"
                            value={data.assessment_type}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.assessment_type && <div className="text-red-500 mt-2">{errors.assessment_type}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-gray-700">Weight (%)</label>
                        <input
                            id="weight"
                            name="weight"
                            type="number"
                            value={data.weight}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                            min="0"
                            max="100"
                        />
                        {errors.weight && <div className="text-red-500 mt-2">{errors.weight}</div>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save Weight
                    </button>
                </form>
            </div>
        </TeacherLayout>
    );
};

export default CreateAssessmentWeights;
