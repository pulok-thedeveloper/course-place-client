import React from 'react';
import './Testimonial.css';
import person1 from '../../../Assests/Instructors/philipp.jpg';
import person2 from '../../../Assests/Instructors/alexander.jpg';
import person3 from '../../../Assests/Instructors/stephanie.jpg';
// import { useContext } from 'react';
// import { AuthContext } from '../../../Context/UserContext';

const Testimonial = () => {
    // const { mode } = useContext(AuthContext);

    return (
        <div className='my-5'>
            <h3 className='fw-bold'>What People Say</h3>
            <div className=" row row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div className="col my-3">
                    <div className="testimonial-card p-4 rounded">
                        <div>
                            <h5 className='mb-3'>Great Work</h5>
                            <p>“I think Course Place is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>
                        </div>
                        <hr />
                        <div className=" d-flex gap-3">
                            <img className='rounded-circle' alt="" src={person1} />
                            <div className="row align-items-center py-2">
                                <h6 className="m-0">Robert Fox</h6>
                                <p className="m-0 course-name">Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div className="testimonial-card p-4 rounded">
                        <div>
                            <h5 className='mb-3'>Perfect Job</h5>
                            <p>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less”</p>
                        </div>
                        <hr />
                        <div className=" d-flex gap-3">
                            <img className='rounded-circle' alt="" src={person2} />
                            <div className="row align-items-center py-2">
                                <h6 className="m-0">Robert Fox</h6>
                                <p className="m-0 course-name">Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col my-3">
                    <div className="testimonial-card p-4 rounded">
                        <div>
                            <h5 className='mb-3'>Service Good</h5>
                            <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”</p>
                        </div>
                        <hr />
                        <div className=" d-flex gap-3">
                            <img className='rounded-circle' alt="" src={person3} />
                            <div className="row align-items-center py-2">
                                <h6 className="m-0">Robert Fox</h6>
                                <p className="m-0 course-name">Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;