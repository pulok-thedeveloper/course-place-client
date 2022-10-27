import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className='container'>
            <header className='mt-5 grid row'>
                <h1 className='col-11 mb-4'>{course.title}</h1>
                <div className='col-1 text-end'><Button><FaFileDownload /></Button></div>
            </header>
            <div>
                <img className='img-fluid mb-4' src={course.img} alt='' />
                <h5>About The Course</h5>
                <p>{course.details.about}</p>
                <h5>What Will You Learn?</h5>
                <p>{course.details.learn}</p>
            </div>
            <div className='text-center'>
                <Button variant="dark">Get Premium Access</Button>
            </div>
        </div>
    );
};

export default CourseDetails;