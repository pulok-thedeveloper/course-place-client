import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    

    console.log(courses[0]);
    return (
        <div className='mx-5'>
            <h2 className='text-center my-3'>All Courses </h2>
            <div className='grid row justify-content-around gy-4'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;