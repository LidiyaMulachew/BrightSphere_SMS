import React, { useEffect, useState } from 'react';
import TeacherLayout from '@/Layouts/TeacherLayout';
import { usePage, useForm } from '@inertiajs/react';
import axios from 'axios'; // Ensure axios is imported

const MaterialUpload = () => {
    // Extract props from Inertia
    const { props } = usePage();
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        course_id: '',
        title: '',
        description: '',
        file: null,
    });

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/materials/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseChange = (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);
        setData('course_id', courseId); // Ensure `course_id` is updated in form data
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create FormData
        const formData = new FormData();
        formData.append('course_id', data.course_id);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('file', data.file);

        // Post FormData to the server
        post(route('materials.store'), {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onSuccess: () => {
                setData({ course_id: '', title: '', description: '', file: null });
                setSelectedCourse(''); // Reset selected course
                alert('File uploaded successfully!');
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
        >
            <div style={{ backgroundColor: '#f3f7f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '700px', height: '650px', display: 'flex', flexDirection: 'column' }}>
                    <div className="text-center mb-10 mt-7">
                        <h1 className="font-bold text-3xl text-blue-500">Upload Material</h1>
                    </div>
                    
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            backgroundColor: '#ffffff',
                            maxWidth: '700px',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)',
                        }}
                    >
                        {/* Course Selection */}
                        <div style={{ marginBottom: '16px', width: '100%' }}>
                            <label htmlFor="course_id" style={{ marginBottom: '8px', display: 'block' }}>Course</label>
                            <select
                                id="course_id"
                                value={data.course_id}
                                onChange={handleCourseChange}
                                required
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            >
                                <option value="">Select a course</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.id}>
                                        {course.course_name}
                                    </option>
                                ))}
                            </select>
                            {errors.course_id && (
                                <div className="text-red-500">{errors.course_id}</div>
                            )}
                        </div>

                        {/* Title Input */}
                        <div style={{ marginBottom: '16px', width: '100%' }}>
                            <label htmlFor="title" style={{ marginBottom: '8px', display: 'block' }}>Title</label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            {errors.title && (
                                <div className="text-red-500">{errors.title}</div>
                            )}
                        </div>

                        {/* Description Input */}
                        <div style={{ marginBottom: '16px', width: '100%' }}>
                            <label htmlFor="description" style={{ marginBottom: '8px', display: 'block' }}>Description</label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                style={{ width: '100%', height: '150px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            {errors.description && (
                                <div className="text-red-500">{errors.description}</div>
                            )}
                        </div>

                        {/* File Input */}
                        <div style={{ marginBottom: '16px', width: '100%' }}>
                            <label htmlFor="file" style={{ marginBottom: '8px', display: 'block' }}>File</label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setData('file', e.target.files[0])}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            {errors.file && (
                                <div className="text-red-500">{errors.file}</div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            style={{
                                fontWeight: 'bold',
                                display: 'block',
                                margin: '0 auto',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                color: '#4a90e2',
                                backgroundColor: '#f2f2f2',
                            }}
                        >
                            {processing ? 'Uploading...' : 'Upload'}
                        </button>
                    </form>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default MaterialUpload;


// import React, { useState } from 'react';
// import TeacherLayout from '@/Layouts/TeacherLayout';
// import { Head, usePage } from '@inertiajs/react';
// import { useForm } from '@inertiajs/react';
// import EditMaterial from './EditMaterial'; 
// import MaterialList from './MaterialList'; 


// const MaterialUpload = () => {
//     //for layout
//     const { props } = usePage();
//     //for layout

//     const { data, setData, post, processing, errors } = useForm({
//         course_id: '',
//         title: '',
//         description: '',
//         file: null,
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//                 const formData = new FormData();
//                 formData.append('title', data.title);
//                 formData.append('description', data.description);
//                 formData.append('file', data.file);
  
//         post(route('materials.store'), {
//             data: formData,
//             onSuccess: () => {
//                 setData({ title: '', description: '', file: null });
//                 alert('File uploaded successfully!');
//             },
//             onError: (errors) => {
//                 console.log(errors);
//             }
//         });
//     };

//     return (
//         <TeacherLayout
//         user={props.auth.user}
//         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
//     >

//         <div style={{ backgroundColor: '#f3f7f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <div style={{ width: '700px', height: '650px', display: 'flex', flexDirection: 'column'}}>
//             <div className="text-center mb-10 mt-7">
//                 <h1 className="font-bold text-3xl text-blue-500 ">Upload Material</h1>
//             </div>
            
//             <form onSubmit={handleSubmit} style={{  backgroundColor: '#ffffff', maxWidth: '700px', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)'  }}>
//                 <div style={{ marginBottom: '16px', width: '100%' }}>
//                     <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Title</label>
//                     <input
//                         type="text"
//                         value={data.title}
//                         onChange={(e) => setData('title', e.target.value)}
//                         style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                     />
//                     {errors.title && (
//                         <div className="text-red-500">{errors.title}</div>
//                     )}
//                 </div>
//                 <div style={{ marginBottom: '16px', width: '100%' }}>
//                     <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Description</label>
//                     <textarea
//                         value={data.description}
//                         onChange={(e) => setData('description', e.target.value)}
//                         style={{ width: '100%', height: '150px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                     />
//                     {errors.description && (
//                         <div className="text-red-500">{errors.description}</div>
//                     )}
//                 </div>
//                 <div style={{ marginBottom: '16px', width: '100%' }}>
//                     <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>File</label>
//                     <input
//                         type="file"
//                         onChange={(e) => setData('file', e.target.files[0])}
//                         style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                     />
//                     {errors.file && (
//                         <div className="text-red-500">{errors.file}</div>
//                     )}
//                 </div>
//                 <button type="submit" disabled={processing} style={{ fontWeight: 'bold', display: 'block', margin: '0 auto', padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', color: '#4a90e2', backgroundColor: '#f2f2f2',}}>
//                     Upload
//                 </button>

//             </form>
//         </div>
//     </div>
//     </TeacherLayout>
    
//     );
// };

// export default MaterialUpload;
