import React from 'react';
import { useForm, usePage  } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const EditAssessmentWeight = ({ assessmentWeight }) => {
    const { props } = usePage();

    const { data, setData, put, processing, errors } = useForm({
        assessment_type: assessmentWeight.assessment_type,
        weight: assessmentWeight.weight,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     put(route('assessmentWeights.update', assessmentWeight.id));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use the put method to send the data
        put(route('assessmentWeights.update', assessmentWeight.id), {
            onSuccess: () => {
                // Redirect on successful update
                window.location.href = `/courses/${course.id}/assessment-weights`;
            },
            onError: (errors) => {
                // Handle errors
                console.error('Form submission error:', errors);
            }
        });
    };

    return (
        <TeacherLayout>
            <div className="ml-9 mr-7 p-5 bg-white shadow-2xl rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Edit Assessment Weight</h1>
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
                        className="bg-sky-200 shadow-lg hover:bg-sky-500 hover:text-white px-4 py-2 rounded"
                    >
                        Update Weight
                    </button>
                </form>
            </div>
        </TeacherLayout>
    );
};

export default EditAssessmentWeight;

