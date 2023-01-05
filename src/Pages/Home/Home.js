
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import heroImg from '../../Images/c-training-1024x580.png';
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaUserGraduate, FaRegPlayCircle, FaUsers } from "react-icons/fa";
import Instructors from './Instructor/Instructors';
import Testimonial from './Testimonial/Testimonial';
import Blogs from './Blogs/Blogs';

const Home = () => {
    const { mode } = useContext(AuthContext);
    return (
        <Container>
            <div className='min-screen-height'>
                <div className={`d-flex justify-content-between ${mode ? "bg-dark text-white" : ""}`}>
                    <div className='text-center align-self-center text-lg-start'>
                        <h1 className='lh-small mb-4'>Find your best career & get opportunity for your future.</h1>
                        <p className='mb-4'>World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and start bighting your future today and impress your audiences.</p>
                        <Link to='/courses'>{mode ? <Button >EXPLORE COURSES <FaArrowRight /></Button> :
                            <Button variant="dark">EXPLORE COURSES <FaArrowRight /></Button>}</Link>
                    </div>
                    <img className='d-none d-lg-block hero-image' alt="" src={heroImg}></img>
                </div>

                <div className="mt-5 moto w-100 p-4 d-flex flex-wrap gap-4 justify-content-between align-items-center rounded">
                    <p className='d-flex m-0 align-items-center gap-2'><FaUsers /> Over 12 million students</p>
                    <p className='d-flex m-0 align-items-center gap-2'><FaRegPlayCircle /> More than 60,000 courses</p>
                    <p className='d-flex m-0 align-items-center gap-2'><FaUserGraduate /> Learn anything online</p>
                </div>
            </div>
            <Instructors></Instructors>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <div className='start-learning d-flex flex-wrap gap-3 justify-content-between align-items-center p-5 my-5'>
                <h3 className='fw-bold'>Join more than <span className={`${mode ? 'text-dark' : 'text-white'}`}>10 million learners</span> worldwide</h3>
                <Link to='/courses'>{mode ? <Button >Start Learning</Button> :
                            <Button variant="dark">Start Learning</Button>}</Link>
            </div>
        </Container>
    );
};

export default Home;