import React from 'react';

const Results = ({ course }) => {
  return (
    <div>
      <h1>Results for {course.name}</h1>
      <ul>
        {course.assessments.map(assessment => (
          <li key={assessment.id}>
            Student: {assessment.student.name} - Score: {assessment.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
