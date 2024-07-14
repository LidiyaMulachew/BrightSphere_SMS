import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import EditMaterial from './EditMaterial'; 
const ShowMaterial = ({ materials }) => {
    const { material } = usePage().props;
    const [editMaterialId, setEditMaterialId] = useState(null);

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this material?')) {
            // Perform deletion logic here
            console.log(`Deleting material with id ${id}`);
        }
    };

    const handleCancelEdit = () => {
        setEditMaterialId(null);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-screen-xl pt-5">
                <div className="container">
                    <div className="text-center mb-7 mt-1">
                        <h1>Material List</h1>
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
                                {Array.isArray(materials) && materials.map((material) => (
                                    <tr key={material.id}>
                                        <td>{material.title}</td>
                                        <td>{material.description}</td>
                                        <td>
                                            <a href={material.file_path} target="_blank" rel="noopener noreferrer">
                                                {material.file_path.split('/').pop()} {/* Displaying just the file name */}
                                            </a>
                                        </td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Actions">
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
                            materialData={materials.find(mat => mat.id === editMaterialId)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowMaterial;
