import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const AssignmentSubmission = ({  material }) => {
    const { data, setData, post, processing, errors } = useForm({
        material_id: material.id,
        file: null
    });
    // const { courses } = usePage().props;

    const handleFileChange = (e) => {
        setData('file', e.target.files[0]);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     post(route('submissions.store'));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('submissions.store'), {
            onSuccess: () => {
                // setShowAlert(true); // Show the alert if the submission is successful
                alert('Submit successfully!');
            window.location.href = `/courses/${material.course_id}`;


            },
            onError: (errors) => {
                // setShowAlert(false); // Hide the alert if there's an error
                console.log(errors);

            }
        });
    };
    

    return (
        <StudentLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assignment Submission</h2>}
        >
            <div className="ml-9 mr-9 mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">{material.title}</h1>
                <p className="mb-4">{material.description}</p>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-gray-700">Upload Your Assignment</label>
                        <input 
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full"
                        />
                        {errors.file && <div className="text-red-500 mt-2">{errors.file}</div>}
                    </div>

                    <button 
                        type="submit"
                        disabled={processing}
                        className="bg-sky-200 hover:bg-sky-500 shadow-lg hover:text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </StudentLayout>
    );
};

export default AssignmentSubmission;