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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     post(route('assessmentWeights.store'));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ensure the post method is correctly used and the route is correct
        post(route('assessmentWeights.store'), {
            onSuccess: () => {
                window.location.href = `/courses/${course.id}/assessment-weights`;},
            onError: () => {
                console.error('Form submission error:', errors); }
        });
    };
    

    return (
        <TeacherLayout>
            <div className="ml-9 mr-8  p-5 bg-white shadow-2xl rounded-lg mt-8">
                <h1 className="text-2xl text-gray-600 text-center font-bold mb-4">Create Assessment Weight For 
                    <span className='text-sky-500'>  {course.course_name}</span> </h1>
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
                        className="bg-sky-200 shadow-lg hover:text-white hover:bg-sky-500 px-4 py-2 rounded"
                    >
                        Save Weight
                    </button>
                </form>
            </div>
        </TeacherLayout>
    );
};

export default CreateAssessmentWeights;
