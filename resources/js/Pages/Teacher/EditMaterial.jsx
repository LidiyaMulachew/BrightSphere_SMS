import React, { useState } from 'react';

const EditMaterial = ({ material }) => {
    const [formData, setFormData] = useState({
        title: material.title,
        description: material.description,
        file: null, // To handle file uploads
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('file', formData.file);

        Inertia.post(`/materials/${material.id}`, formDataToSend);
    };

    return (
        <div>
            <h1>Edit Material</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label>Current File:</label>
                    <p>{material.file_path}</p>
                </div>
                <div>
                    <label>New File:</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Material</button>
            </form>
        </div>
    );
};

export default EditMaterial;
