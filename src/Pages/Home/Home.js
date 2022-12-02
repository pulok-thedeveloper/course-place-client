
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import heroImg from '../../Images/c-training-1024x580.png';
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const {mode} = useContext(AuthContext);
    return (
        <div className='App'>
            <div className={`d-flex justify-content-between align-items-center p-5 ${mode ? "bg-dark text-white": ""}`}>
                <div className='text-center text-lg-start'>
                    <h1 className='lh-small mb-4'>Find your best career & get <br></br> opportunity for your future.</h1>
                    <p className='mb-4'>World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and start bighting your future today and impress your audiences.</p>
                    <Button variant="dark">EXPLORE COURSES <FaArrowRight /></Button>
                </div>
                <img className='w-50 d-none d-lg-block' alt="" src={heroImg}></img>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;