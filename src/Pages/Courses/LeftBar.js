import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = ({ courses }) => {
    return (
        <div>
            {
                courses.map(course => <p key={course.id}>
                    <Link className='text-decoration-none' to={`/courses/${course.id}`}>{course.shortTitle}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftBar;