import React, { useContext } from 'react';
import instructor1 from '../../../Assests/Instructors/alexander.jpg';
import instructor2 from '../../../Assests/Instructors/courtney.jpg';
import instructor3 from '../../../Assests/Instructors/philipp.jpg';
import instructor4 from '../../../Assests/Instructors/stephanie.jpg';
import './instructor.css';
import { FaStar, FaUserFriends } from "react-icons/fa";
import { HiPlay } from "react-icons/hi";
import { AuthContext } from '../../../Context/UserContext';

const Instructors = () => {
    const { mode } = useContext(AuthContext);
    return (
        <div className='my-5'>
            <h3 className='fw-bold'>Learn from the best instructors</h3>
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 my-5">
                <div className="col my-3">
                    <div>
                        <img className=' rounded w-100' alt='' src={instructor1} />
                    </div>
                    <div className="mt-3">
                        <h5 className="instructor-name">Alexander Hipp</h5>
                        <p className={`skill ${mode ? 'text-light' : ''}`}>Web Designer</p>
                        <div className={`d-flex justify-content-between instructor-info ${mode ? 'text-light' : ''}`}>
                            <p className='d-flex align-items-center gap-1'><FaStar /> 4.8</p>
                            <p className="d-flex align-items-center gap-1"><FaUserFriends />250 Students</p>
                            <p className="d-flex align-items-center gap-1"><HiPlay /> 11 Courses</p>
                        </div>
                    </div>

                </div>

                <div className="col my-3">
                    <div>
                        <img className=' rounded w-100' alt='' src={instructor2} />
                    </div>
                    <div className="mt-3">
                        <h5 className="instructor-name">Amir Selisepour</h5>
                        <p className={`skill ${mode ? 'text-light' : ''}`}>Graphics Designer</p>
                        <div className={`d-flex justify-content-between instructor-info ${mode ? 'text-light' : ''}`}>
                            <p className='d-flex align-items-center gap-1'><FaStar /> 4.5</p>
                            <p className="d-flex align-items-center gap-1"><FaUserFriends />170 Students</p>
                            <p className="d-flex align-items-center gap-1"><HiPlay /> 7 Courses</p>
                        </div>

                    </div>
                </div>

                <div className="col my-3">
                    <div>
                        <img className=' rounded w-100' alt='' src={instructor3} />
                    </div>
                    <div className="mt-3">
                        <h5 className="instructor-name">Julian Wan</h5>
                        <p className={`skill ${mode ? 'text-light' : ''}`}>App Developer</p>
                        <div className={`d-flex justify-content-between instructor-info ${mode ? 'text-light' : ''}`}>
                            <p className='d-flex align-items-center gap-1'><FaStar /> 4.7</p>
                            <p className="d-flex align-items-center gap-1"><FaUserFriends />150 Students</p>
                            <p className="d-flex align-items-center gap-1"><HiPlay /> 9 Courses</p>
                        </div>
                    </div>
                </div>

                <div className="col my-3">
                    <div>
                        <img className=' rounded w-100' alt='' src={instructor4} />
                    </div>
                    <div className="mt-3">
                        <h5 className="instructor-name">John Doe</h5>
                        <p className={`skill ${mode ? 'text-light' : ''}`}>Digital Marketing</p>
                        <div className={`d-flex justify-content-between instructor-info ${mode ? 'text-light' : ''}`}>
                            <p className='d-flex align-items-center gap-1'><FaStar /> 4.9</p>
                            <p className="d-flex align-items-center gap-1"><FaUserFriends />120 Students</p>
                            <p className="d-flex align-items-center gap-1"><HiPlay /> 5 Courses</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Instructors;