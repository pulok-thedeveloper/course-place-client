import React, { useContext } from 'react';
import blog1 from '../../../Assests/blogs/blog-image1.jpg';
import blog2 from '../../../Assests/blogs/blog-image2.jpg';
import blog3 from '../../../Assests/blogs/blog-image3.png';
import { AuthContext } from '../../../Context/UserContext';
import './Blogs.css';

const Blogs = () => {
    const { mode } = useContext(AuthContext);
    return (
        <div className='my-5'>
            <h3 className='fw-bold'>Resources & News</h3>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 my-5">
                <div className="col">
                    <div>
                        <img className=' rounded w-100' alt='' src={blog1} />
                    </div>
                    <div className="mt-3">
                        <h5 className="blog-title">10 marketing trends that you should be prepared for in 2022</h5>
                        <p className={`publish-date ${mode ? 'text-light' : ''}`}>December 28, 2022</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <img className=' rounded w-100' alt='' src={blog2} />
                    </div>
                    <div className="mt-3">
                        <h5 className="blog-title">How to design a simple, yet unique and memorable brand identity</h5>
                        <p className={`publish-date ${mode ? 'text-light' : ''}`}>January 02, 2022</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <img className=' rounded w-100' alt='' src={blog3} />
                    </div>
                    <div className="mt-3">
                        <h5 className="blog-title">Engendering a culture of professional development</h5>
                        <p className={`publish-date ${mode ? 'text-light' : ''}`}>January 05, 2023</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;