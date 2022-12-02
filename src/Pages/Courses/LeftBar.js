import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = ({ courses }) => {
    console.log(courses);
    return (
        <div>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.shortTitle}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftBar;