import React, { useState } from 'react';
import axios from 'axios';

const EditMaterial = ({ material }) => {
    const [formData, setFormData] = useState({
        title: material.title,
        description: material.description,
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('file', formData.file);

        try {
            await axios.put(`/materials/${material.id}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Material updated successfully.');

        } catch (error) {
            console.error('Error updating material:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#f3f7f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '700px', height: '650px', display: 'flex', flexDirection: 'column' }}>
                <div className="text-center mb-10 mt-7">
                    <h1 className="font-bold text-3xl text-blue-500">Edit Material</h1>
                </div>
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', maxWidth: '700px', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)' }}>
                    <div style={{ marginBottom: '16px', width: '100%' }}>
                        <label htmlFor="title" style={{ marginBottom: '8px', display: 'block' }}>Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title || ''}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '16px', width: '100%' }}>
                        <label htmlFor="description" style={{ marginBottom: '8px', display: 'block' }}>Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description || ''}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        ></textarea>
                    </div>
                    <div style={{ marginBottom: '16px', width: '100%' }}>
                        <label style={{ marginBottom: '8px', display: 'block' }}>Current File:</label>
                        {material.file_path && (
                            <p>{`public/materials/${material.file_path}`}</p>
                        )}
                    </div>

                    <div style={{ marginBottom: '16px', width: '100%' }}>
                        <label htmlFor="file" style={{ marginBottom: '8px', display: 'block' }}>New File:</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <button type="submit" style={{ fontWeight: 'bold', display: 'block', margin: '0 auto', padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', color: '#4a90e2', backgroundColor: '#f2f2f2' }}>Update Material</button>
                </form>
            </div>
        </div>
    );
};

export default EditMaterial;
