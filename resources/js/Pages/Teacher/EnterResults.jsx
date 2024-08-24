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
            alert('Error saving results. Please try again.');
        }
    };
    console.log(students);

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enter Results for {assessment.assessment_type}</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4">Enter Results for {assessment.assessment_type}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {students.map(student => (
                                <div key={student.id} className="flex items-center justify-between">
                                    <label className="text-lg font-medium">
                                        {student.name}
                                    </label>
                                    <input
                                        type="number"
                                        name={`student_results[${student.id}]`}
                                        className="border border-gray-300 rounded-md p-2"
                                        placeholder="Enter result"
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                            Save Results
                        </button>
                    </form>
                    <Link href={`/courses/${course.id}/assessment-weights`} className="text-blue-500 hover:underline mt-4 block">
                        Back 
                    </Link>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default EnterResults;
