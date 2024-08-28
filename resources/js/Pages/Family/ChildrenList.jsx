import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, usePage } from '@inertiajs/react';
import FamilyLayout from '@/Layouts/FamilyLayout';

const Children = ({ student_names }) => {
  const { props } = usePage();
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                await axios.get('/family/children'); // Adjust the endpoint as needed
            } catch (error) {
                // setError(Error fetching student names: ${error.message});
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleNameClick = (studentName) => {
        // Construct the URL with the student name
        const url = new URL('/family/courses', window.location.origin);
        url.searchParams.append('student', studentName);

        // Redirect the user
        window.location.href = url.toString();
    };



    // if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <FamilyLayout
        user={usePage().props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}
      >
        <div className="ml-9 mr-9 mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
            <h1 className="text-4xl text-center text-gray-500 font-bold mb-4">My Children</h1>
            {student_names.length > 0 ? (
                <ul>
                    {student_names.map((name, index) => (
                        <li
                            key={index}
                            onClick={() => handleNameClick(name)}
                            className="cursor-pointer text-center text-sky-500 text-2xl p-4 m-2 border rounded-lg bg-white shadow-md hover:bg-sky-500 hover:text-white transition-colors"
                        >
                            {name}
                        </li>

                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No children found.</p>
            )}
        </div>
    </FamilyLayout>

    );
};

export default Children;