import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AssignTeacher = ({ course, teachers }) => {
    const { props } = usePage();

    const { data, setData, post, processing } = useForm({
        teacher_ids: [], // Array to store selected teacher IDs
        course_id: course.id
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit selected teacher IDs to the backend
        post(`/courses/${course.id}/assign`, {
            teacher_ids: data.teacher_ids, // Send array of selected teacher IDs
        });
    };

    // Handle changes in the checkboxes
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setData(prevData => {
            const updatedTeacherIds = checked
                ? [...prevData.teacher_ids, value] // Add ID if checked
                : prevData.teacher_ids.filter(id => id !== value); // Remove ID if unchecked

            return { ...prevData, teacher_ids: updatedTeacherIds };
        });
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assign Teacher</h2>}
        >
            <Head title="Assign Teacher" />
            <div className="ml-10 mr-7 p-10 bg-white shadow-2xl rounded-lg mt-8">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl text-gray-500 font-semibold mb-4">Assign Teacher to Course:
                         <span className='text-sky-500'>  {course.course_name}</span>
                         </h3>

                    <div className="mb-4  text-center">
                        <label className="block text-2xl font-medium pt-5 text-gray-700">Select Teachers</label>
                        <div className="mt-1">
                            {teachers.map(teacher => (
                                <div key={teacher.id} className="flex items-center  text-center mb-2">
                                    <input
                                        type="checkbox"
                                        id={`teacher_${teacher.id}`}
                                        value={teacher.id}
                                        checked={data.teacher_ids.includes(teacher.id.toString())}
                                        onChange={handleCheckboxChange}
                                        className="mr-2  text-center text-sky-600 border-gray-300 rounded"
                                    />
                                    <label htmlFor={`teacher_${teacher.id}`} className="text-xl text-gray-700">{teacher.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="py-2 px-4 rounded-md shadow-xl bg-sky-100 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AssignTeacher;
