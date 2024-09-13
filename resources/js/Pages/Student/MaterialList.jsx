import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const MaterialList = () => {
    const { course, materials } = usePage().props;

    return (
        <StudentLayout
            user={usePage().props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Course Details</h2>}
        >
            <div className="ml-9 mr-9 mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <div className="text-center mb-10 mt-3 text-blue-500">
                    <h1 className="text-2xl font-bold mb-4">{course.course_name}</h1>
                </div>

                <h2 className="text-2xl text-center text-gray-600 font-semibold mb-4">Materials</h2>
                {materials.length > 0 ? (
                    <ul>
                        {materials.map((material) => (
                            <li key={material.id} className="mb-4 border shadow-lg p-4">
                                <h3 className="text-lg mb-3">{material.title}</h3>
                                <p className="text-m mb-5">{material.description}</p>
                                <div className="flex justify-between items-center">
                                    {/* <Link 
                                        // href={`/${material.file_path}`} 
                                       
                                        download
                                        className="bg-sky-200  py-2 px-4 mb-9 rounded-md shadow-lg hover:bg-sky-500 hover:text-white"
                                    >
                                        Download
                                    </Link> */}
<a
    href={`/${material.file_path}`} 
    target="_blank" 
    rel="noopener noreferrer"
    download
    className="bg-sky-200 py-2 px-4 mb-9 rounded-md shadow-lg hover:bg-sky-500 hover:text-white inline-block text-center"
>
    Download
</a>


                                  
                                    
                                    <Link 
                                        href={`/assignments/${material.id}/submission`} 
                                        className="bg-sky-200 py-2 px-4 mb-9 rounded-md shadow-lg hover:bg-sky-500 hover:text-white"
                                    >
                                        Submission
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No materials available for this course.</p>
                )}
            </div>
        </StudentLayout>
    );
};

export default MaterialList;