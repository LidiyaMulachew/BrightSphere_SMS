import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';
import axios from 'axios'; 

const EnterResults = ({ assessment, students, course }) => {
    const { props } = usePage();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            await axios.post(`/courses/${course.id}/assessment-weights/${assessment.id}/results`, formData);
            window.location.href = `/courses/${course.id}/assessment-weights`; // Redirect after successful submission
        } catch (error) {
            console.error('Error saving results!', error);
            alert(`Results cannot be updated because their grade has already been submitted and locked.`);        }
    };
    console.log(students);

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enter Results for {assessment.assessment_type}</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">Enter Results For
                        <span className='text-sky-500'> {assessment.assessment_type}</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {students.map(student => (
                                <div key={student.id} className=" items-center ">
                                    <label className="text-lg text-gray-600 mr-10 font-medium">
                                        {student.name} 
                                        
                                    </label>
                                    
                                    <input
                                        type="number"
                                        name={`student_results[${student.id}]`}
                                        // value={assessment[student.id] || ''} // Set value to previous result or empty

                                        // className="border border-gray-300 rounded-md p-2"
                        className="mt-1 rounded block w-full"

                                        placeholder="Enter result"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex mt-5'>
                        <button type="submit" className="mt-4 bg-sky-100 mr-20 hover:bg-sky-500 hover:text-white px-4 py-2 rounded">
                            Save Results
                        </button>
                        <Link href={`/courses/${course.id}/assessment-weights`} className="bg-sky-100 hover:bg-sky-500 hover:text-white mt-4 px-4 py-2 rounded block">
                            Back 
                        </Link>
                        </div>

                    </form>

                </div>
            </div>
        </TeacherLayout>
    );
};

export default EnterResults;


