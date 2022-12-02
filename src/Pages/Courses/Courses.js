import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftBar from './LeftBar';

const Courses = () => {
    const courses = useLoaderData();


    console.log(courses[0]);
    return (


        <Container>
        <h2 className="text-center mt-5">All Courses</h2>
            <Row className='row justify-content-between'>
                <Col md='3' className='mt-5'>
                    <LeftBar courses={courses}></LeftBar>
                </Col>
                <Col md='9' className='mt-5'>
                    <div className='row g-3'>
                        {
                            courses.map(course => <Course className='col-12 col-lg-4 col-md-8' key={course.id} course={course}></Course>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;