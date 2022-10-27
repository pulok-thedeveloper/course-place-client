
import React from 'react';
import { Button } from 'react-bootstrap';
import heroImg from '../../Images/c-training-1024x580.png';
import { FaArrowRight } from "react-icons/fa";
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='ps-5 text-center text-lg-start'>
                    <h1 className='lh-small mb-4'>Find your best career & get <br></br> opportunity for your future.</h1>
                    <p className='mb-4'>World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and start bighting your future today and impress your audiences.</p>
                    <Button variant="dark">EXPLORE COURSES <FaArrowRight /></Button>
                </div>
                <img className='w-50 d-none d-lg-block' alt="" src={heroImg}></img>
            </div>
            <Courses></Courses>
        </div>
    );
};

export default Home;