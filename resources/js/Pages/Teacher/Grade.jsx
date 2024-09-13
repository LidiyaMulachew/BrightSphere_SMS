import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';
import TeacherLayout from '@/Layouts/TeacherLayout';

const Grade = ({ courseId, students }) => {
    const { props } = usePage();
    const [processing, setProcessing] = useState(false);
    // Initialize grades state
    const [grades, setGrades] = useState(() =>
        students.reduce((acc, student) => {
            acc[student.student.id] = {
                final_score: student.final_score || '',
                grade: student.grade || '',
                locked: student.locked || false // Initialize locked status from the provided data
            };
            return acc;
        }, {})
    );

    // Function to determine the grade based on final score
    const calculateGrade = (finalScore) => {
        if (finalScore < 50) return 'F';
        if (finalScore < 60) return 'C';
        if (finalScore < 65) return 'C+';
        if (finalScore < 70) return 'B-';
        if (finalScore < 75) return 'B';
        if (finalScore < 80) return 'B+';
        if (finalScore < 85) return 'A-';
        if (finalScore < 90) return 'A';
        return 'A+';
    };

    // Update the grade when final score changes
    useEffect(() => {
        const updatedGrades = { ...grades };
        Object.keys(updatedGrades).forEach(id => {
            const finalScore = parseFloat(updatedGrades[id].final_score);
            if (!isNaN(finalScore)) {
                updatedGrades[id].grade = calculateGrade(finalScore);
            } else {
                updatedGrades[id].grade = '';
            }
        });
        setGrades(updatedGrades);
    }, [students]);

    const handleChange = (id, field, value) => {
    // Ensure the final_score is within the range [0, 100]
        if (field === 'final_score') {
            value = Math.max(0, Math.min(100, parseFloat(value)));
        }
        if (!grades[id]?.locked) { // Allow change only if not locked
            setGrades(prev => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    [field]: value
                }
            }));
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the updated grades with locked status
    const updatedGrades = Object.keys(grades).map(id => ({
        student_id: id,
        assessment_record_id: grades[id].assessment_record_id, // Ensure this is included
        final_score: grades[id].final_score,
        grade: grades[id].grade,
        locked: true // Use the current locked status
    }));

    try {
        await axios.post(`/courses/${courseId}/store`, {
            grades: updatedGrades
        });
        alert('Grades saved successfully');
        window.location.href = `/assigned-courses`;
        

    } catch (error) {
        console.error('Error saving grades:', error);
        alert('Cannot update locked grades');
    }
};


    return (
        <TeacherLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Grade</h2>}
        >
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-2xl rounded-lg mt-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save Grades
                        </button> */}
                        <button
                        type="submit"
                        disabled={processing}
                        className="bg-sky-200 hover:text-white hover:bg-sky-500 shadow-md px-4 py-2 rounded"
                    >
                        {processing ? 'Submitting...' : 'Submit Grade'}
                    </button>
                    </div>
                    <table className="table table-bordered table-striped w-full" style={{ backgroundColor: '#ffffff', border: '2px solid #dddddd' }}>
                        <thead className="thead-light">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    Student Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    Final Score
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                    Grade
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {students.map(student => (
                                <tr key={student.student.id}>
                                    <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">
                                        {student.student.name}
                                    </td>
                                    <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">
                                        <input
                                            type="number"
                                            value={grades[student.student.id]?.final_score || ''}
                                            onChange={(e) => handleChange(student.student.id, 'final_score', e.target.value)}
                                            className="border border-gray-300 rounded-md p-2"
                                            min="0"
                                            max="100"
                                        />
                                    </td>
                                    <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">
                                        {grades[student.student.id]?.grade || ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </TeacherLayout>
    );
};

export default Grade;
