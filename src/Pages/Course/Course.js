import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaStopwatch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
            <Card className='col-4 p-0 bg-dark text-white' style={{ width: '24rem' }}>
                <Card.Img variant="top" src={course.img} />
                <Card.Body className='mb-3'>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <div className='text-center grid row justify-content-between gap-3 px-4'>
                    <p className='col bg-secondary rounded'>Lesson {course.lessons}</p>
                    <p className='col bg-secondary rounded'><FaStopwatch></FaStopwatch> {course.duration}</p>
                    <p className='col bg-secondary rounded'>Rating: {course.rating}</p>
                </div>
                <Card.Body>
                <Link to={`/courses/${course.id}`}><Button className="w-100" variant="light">Course Details</Button></Link>
                </Card.Body>
            </Card>
    );
};

export default Course;