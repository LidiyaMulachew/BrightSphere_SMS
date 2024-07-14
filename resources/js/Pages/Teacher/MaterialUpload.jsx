import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import EditMaterial from './EditMaterial'; 
import ShowMaterial from './ShowMaterial'; 
const MaterialUpload = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
                // Prepare form data for submission
                const formData = new FormData();
                formData.append('title', data.title);
                formData.append('description', data.description);
                formData.append('file', data.file);
  
        post(route('materials.store'), {
            data: formData,
            onSuccess: () => {
                // Reset form state after successful upload
                setData({ title: '', description: '', file: null });
                alert('File uploaded successfully!');
            },
            onError: (errors) => {
                // Handle errors, if any
                console.log(errors);
            }
        });
    };

    return (
        <div style={{ backgroundColor: '#f3f7f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '700px', height: '650px', display: 'flex', flexDirection: 'column'}}>
            <div className="text-center mb-10 mt-7">
                <h1 className="font-bold text-3xl text-blue-500 ">Upload Material</h1>
            </div>
            
            <form onSubmit={handleSubmit} style={{  backgroundColor: '#ffffff', maxWidth: '700px', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)'  }}>
                <div style={{ marginBottom: '16px', width: '100%' }}>
                    <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {errors.title && (
                        <div className="text-red-500">{errors.title}</div>
                    )}
                </div>
                <div style={{ marginBottom: '16px', width: '100%' }}>
                    <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        style={{ width: '100%', height: '150px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {errors.description && (
                        <div className="text-red-500">{errors.description}</div>
                    )}
                </div>
                <div style={{ marginBottom: '16px', width: '100%' }}>
                    <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>File</label>
                    <input
                        type="file"
                        onChange={(e) => setData('file', e.target.files[0])}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {errors.file && (
                        <div className="text-red-500">{errors.file}</div>
                    )}
                </div>
                <button type="submit" disabled={processing} style={{ fontWeight: 'bold', display: 'block', margin: '0 auto', padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', color: '#4a90e2', backgroundColor: '#f2f2f2',}}>
                    Upload
                </button>

            </form>
        </div>
    </div>
    
    );
};

export default MaterialUpload;
