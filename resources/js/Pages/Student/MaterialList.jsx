import React from 'react';
import { usePage } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const MaterialList = () => {
    const { props } = usePage();
    const { materials } = props;

    // Check if the materials data is in the expected format
    if (!Array.isArray(materials)) {
        return <div className="text-red-500">Unexpected data format.</div>;
    }

    return (
        <StudentLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Materials</h2>}
        >
            <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-8">

            <div className="text-center mb-10 mt-3 text-blue-500">
                <h1 className="text-2xl font-bold mb-4">Uploaded Materials</h1>
                </div>

                {materials.length ? (
                    <ul>
                        {materials.map(material => (
                            <li key={material.id} className="mb-6 border p-4">
                                <h3 className="text-lg mb-3 ">{material.title}</h3>
                                <p className="text-m mb-5">{material.description}</p>
                                <a href={`/storage/app/${material.file_path}`} download 
                                className="text-blue-600 py-2 px-4 mb-9 rounded-md shadow-md hover:bg-blue-100 ">
                                    Download
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No materials available.</p>
                )}
            </div>
        </StudentLayout>
    );
};

export default MaterialList;
