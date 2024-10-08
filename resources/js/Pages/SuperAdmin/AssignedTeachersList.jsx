import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, useForm , Link} from '@inertiajs/react';
import { Head } from '@inertiajs/react';

const AssignedTeachersList = ({ course, teachers }) => {
    const { props } = usePage();



         // Create form handling for unassign
         const handleUnassign = (teacherId) => {
            if (confirm('Are you sure you want to unassign this teacher?')) {
                axios.delete('/teachers/unassign', {
                    data: {
                        teacher_id: teacherId,
                        course_id: course.id
                    }
                })
                .then(() => {
                    // alert('Teacher unassigned successfully.');
                    window.location.reload();
                })
                .catch(() => {
                    alert('An error occurred. Please try again.');
                });
            }
        };
        const handleButtonClick = (courseId) => {
            window.location.href = `/courses/${courseId}/assign-teachers`;
        };

    // console.log('AssignedTeachersList:' ,AssignedTeachersList);
    // console.log('hey');

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Assign Teacher</h2>}
        >
            <Head title={`Teachers for ${course.course_name}`} />
            <div className="ml-10 mr-8 p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl text-center font-bold mb-4">
                        <span className='text-gray-600'>Assigned Teachers For:  </span>
                        <span className="text-sky-500">{course.course_name}</span>
                    </h1>
                {/* <Link href="/courses/{course}/assign-teachers" className="bg-sky-200 ml-5 shadow-2xl px-4 py-2 hover:bg-sky-600 hover:text-white rounded">Add Teachers</Link> */}
                    <button
                        className=" mr-2 bg-sky-200 mb-5 p-2 shadow-xl px-3  hover:bg-sky-500 rounded hover:text-white hover:shadow-2xl"
                        onClick={() => handleButtonClick(course.id)}
                    >
                        Add Teachers
                    </button>
                    {teachers.length === 0 ? (
                        <p>No teachers assigned to this course.</p>
                    ) : (
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 border">Name</th>
                                    <th className="py-3 px-4 border">Email</th>
                                    <th className="py-3 px-4 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map(teacher => (
                                    <tr key={teacher.id}>
                                    {/* <td className="px-3 py-4 border">{index + 1}</td> */}

                                        <td className="py-3 px-4 border">
                                            <span className="text-blue-500">{teacher.name}</span>
                                        </td>
                                        <td className="py-3 px-4 border">{teacher.email}</td>
                                        <td className="py-3 px-4 border">
                                            <button
                                                onClick={() => handleUnassign(teacher.id)}
                                                className="py-1 px-2 text-red-500 hover:bg-red-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                            >
                                                Unassign
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="text-center mt-9">
                        <a href={route('courses.index')} className="mt-5 py-2 px-3 rounded-md shadow-2xl bg-sky-100 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center">Back to Courses</a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AssignedTeachersList;
