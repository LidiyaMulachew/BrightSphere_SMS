import React from 'react';
import { Link } from '@inertiajs/react';

const Courses = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link href={`/family/courses/${course.id}/results`} className="text-blue-600 hover:underline">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
