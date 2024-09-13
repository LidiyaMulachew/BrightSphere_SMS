import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const SubmissionsList = () => {
    const { material, submissions } = usePage().props;

    return (
        <TeacherLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Submissions for {material.title}</h2>}
        >
            <div className="ml-9 mr-9 mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Submissions</h1>
                {submissions.length > 0 ? (
                    <ul>
                        {submissions.map((submission) => (
                            <li key={submission.id} className="mb-4 border p-4">
                                {/* <h3 className="text-lg mb-3">Student: {submission.student.name}</h3> */}
                                <h3 className="text-lg mb-3">
                                    StudentName: <span className="text-blue-500 font-semibold">{submission.student.name}</span>
                                </h3>
                                {/* <p className="text-m mb-3">File Path: {submission.file_path}</p> */}
                                

<a
    href={`/${submission.file_path}`} 
    target="_blank" 
    rel="noopener noreferrer"
    download
    className="bg-sky-200 py-2 px-4 mb-2 rounded-md shadow-lg hover:bg-sky-500 hover:text-white inline-block text-center"
>
    Download
</a>

                                    {/* <a href={submission.file_path} target="_blank" rel="noopener noreferrer">
                                                {submission.file_path.split('/').pop()}
                                            </a> */}

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No submissions available for this assignment.</p>
                )}
            </div>
        </TeacherLayout>
    );
};

export default SubmissionsList;