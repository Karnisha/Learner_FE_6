import React, { useState , useEffect} from 'react'
import axios from 'axios';
import { FaBookOpen } from 'react-icons/fa';
function CourseCount() {
    const [count,setCount]=useState(0);
    const fetchData = async () => {
        try {
            const response = await axios.get(' http://localhost:5199/api/Dashboard/GetTotalCourses');
            setCount(response.data.data);
        } catch (error) {
            console.error('Error fetching new learner count:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <FaBookOpen size={30} />
                            <h5 className="card-title">Number of Courses</h5>
                            <p className="card-text">Count: <span id="courseCount">{count}</span></p>
        </div>
    )
}

export default CourseCount
