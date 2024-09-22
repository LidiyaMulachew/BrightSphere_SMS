import React, { useState } from 'react';
import TeacherLayout from '@/Layouts/TeacherLayout';
import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import EditMaterial from './EditMaterial'; 
import axios from 'axios';



const MaterialList = ({ materials }) => {
    //for layout
    const { props } = usePage();
    //for layout

    const [editMaterialId, setEditMaterialId] = useState(null);
    const [materialsList, setMaterialsList] = useState(materials); 

    const handleEditClick = (materialId) => {
        setEditMaterialId(materialId);
    };

    const handleCancelEdit = () => {
        setEditMaterialId(null);
    };

    const handleDelete = async (materialId) => {
        try {
            await axios.delete(`/materials/${materialId}`);
    
            // Update materialsList state after deletion
            setMaterialsList(prevMaterialsList => prevMaterialsList.filter(material => material.id !== materialId));
        } catch (error) {
            console.error('Error deleting material:', error);
        }
    };
    

    return (
        <TeacherLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
    >
        <div className="bg-gray-100 flex items-center justify-center">
            <div className=" bg-white mt-10 ml-9 pb-8 shadow-2xl me-9 w-full max-w-screen-xl pt-5">
                <div className="container mx-auto p-4">
                    <div className="text-center mb-7 mt-1">
                        <h1 className="font-bold text-2xl text-blue-400">Material List</h1>
                    </div>
                <Link href="/materials/create" className="bg-sky-200 shadow-lg hover:bg-sky-500 hover:text-white px-4 py-2 rounded">Upload</Link>

                    <div className="mt-4">
                        <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                            <thead className="thead-light">
                                <tr>
                                    <th className="px-3 py-3 border text-start">Title</th>
                                    <th className="px-3 py-3 border text-start">Description</th>
                                    {/* <th className="px-3 py-3 border">File</th> */}
                                    <th className="px-3 py-3 border text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(materialsList) && materialsList.map((material, index) => (
                                    <tr key={material.id}>
                                        <td className="px-3 py-4 border">{material.title}</td>
                                        <td className="px-3 py-4 border">{material.description}</td>
                                        {/* <td className="px-3 py-4 border">
                                            <a href={material.file_path} target="_blank" rel="noopener noreferrer">
                                                {material.file_path.split('/').pop()}
                                            </a>
                                        </td> */}
                                        <td className="px-6 py-4 border">
                                            <div className="flex justify-around">
                                                <Link href={`/assignments/${material.id}/submissions`} className="bg-white px-3 py-2 rounded shadow-lg hover:text-white hover:bg-sky-500 mr-2">
                                                    Detail
                                                </Link>
                                                <Link href={`materials/${material.id}/edit`} className="bg-white px-3 py-2 rounded shadow-lg hover:text-white hover:bg-sky-500 ">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(material.id)}
                                                    className="bg-white text-red-500 px-3 py-2 rounded shadow-lg hover:text-white hover:bg-red-400 ml-2"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Edit Material Modal */}
            {editMaterialId && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <EditMaterial
                            materialId={editMaterialId}
                            onCancel={handleCancelEdit}
                            materialData={materialsList.find(material => material.id === editMaterialId)}
                        />
                    </div>
                </div>
            )}
        </div>
        </TeacherLayout>
    );
};

export default MaterialList;
