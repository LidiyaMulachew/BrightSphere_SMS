import React, { useEffect, useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';

const CourseEnrollment = () => {
    const { props } = usePage();
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/enroll/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseChange = async (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);
        
        if (courseId) {
            try {
                const response = await axios.get(`/teachers-by-course/${courseId}`);
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        } else {
            setTeachers([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/enroll', { course_id: selectedCourse, teacher_id: selectedTeacher });
            alert('Enrollment successful!');
            // window.location
            window.location.href = `/all-courses`;

        } catch (error) {
            console.error('Error enrolling:', error);
            alert('You are already enrolled in this course.');
        }

        setLoading(false);
    };


    return (
        <StudentLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enroll in Course</h2>}
        >
            <Head title="Enroll in Course" />
            <div className=" mx-auto p-10 ml-9 mr-9 bg-white shadow-2xl rounded-lg mt-8">
            <div className=" mt-2 mb-8 text-center  text-blue-500 font-bold text-2xl ">

                 <h1 >Enroll In Course</h1>
            </div>

            <form onSubmit={handleSubmit} >
    <div style={{ marginBottom: '20px' }}>
        <label>Select Course:</label>
        <select value={selectedCourse} onChange={handleCourseChange} required
                                className="mt-1 block w-full"
                                >
            <option value="">Select a course</option>
            {courses.map(course => (
                <option key={course.id} value={course.id}>
                    {course.course_name}
                </option>
            ))}
        </select>
    </div>
    <div style={{ marginBottom: '20px' }}>
    <label>Select Teacher:</label>
    <select value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)} required disabled={!selectedCourse} 
                                className="mt-1 block w-full"
                                >
        <option value="">Select a teacher</option>
        {teachers.map(teacher => (
            <option key={teacher.id} value={teacher.id}>
                {teacher.name} ({teacher.course_name})
            </option>
        ))}
    </select>
</div>

    <div className="flex justify-center">
    <button type="submit" disabled={loading} 
        className="py-2 px-4 mt-5 rounded-md bg-sky-200 shadow-lg hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl"
    >
        {loading ? 'Enrolling...' : 'Enroll'}
    </button>
</div>

</form>

            </div>
        </StudentLayout>
    );
};

export default CourseEnrollment;

   