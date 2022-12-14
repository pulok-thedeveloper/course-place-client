import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Pdf from 'react-to-pdf';
import { AuthContext } from '../../Context/UserContext';

const CourseDetails = () => {
    const ref = React.createRef();
    const course = useLoaderData();
    const { mode } = useContext(AuthContext);
    return (
        <div className='container'>
            <header className='mt-5 grid row'>
                <h1 className='col-11 mb-4'>{course.title}</h1>
                <div className='col-1 text-end'>
                    <Pdf targetRef={ref} filename="course.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} ><FaFileDownload /></Button>}

                    </Pdf>


                </div>
            </header>
            <div ref={ref}>
                <img className='img-fluid mb-4' src={course.img} alt='' />
                <h5>About The Course</h5>
                <p>{course.details.about}</p>
                <h5>What Will You Learn?</h5>
                <p>{course.details.learn}</p>
            </div>
            <div className='text-center my-5'>
                <Link to={`/checkout/${course.id}`}>{mode ? <Button>Get Premium Access</Button> :
                    <Button variant="dark">Get Premium Access</Button>}</Link>
            </div>
        </div>
    );
};

export default CourseDetails;