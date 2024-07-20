import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import EditMaterial from './EditMaterial'; 
import axios from 'axios';

const MaterialList = ({ materials }) => {
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
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container">
                    <div className="text-center mb-7 mt-1">
                        <h1 className="font-bold text-2xl text-blue-400">Material List</h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                            <thead className="thead-light">
                                <tr>
                                    <th className="px-6 py-3 border">Title</th>
                                    <th className="px-24 py-3 border">Description</th>
                                    <th className="px-24 py-3 border">File</th>
                                    <th className="px-16 py-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(materialsList) && materialsList.map((material, index) => (
                                    <tr key={material.id}>
                                        <td className="px-6 py-4 border">{material.title}</td>
                                        <td className="px-24 py-4 border">{material.description}</td>
                                        <td className="px-16 py-4 border">
                                            <a href={material.file_path} target="_blank" rel="noopener noreferrer">
                                                {material.file_path.split('/').pop()}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 border">
                                            <div className="flex justify-around">
                                                <Link href={`materials/${material.id}/edit`} className="btn btn-sm btn-primary">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(material.id)}
                                                    className="btn btn-sm btn-danger ml-2"
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
    );
};

export default MaterialList;
