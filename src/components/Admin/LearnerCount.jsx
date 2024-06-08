import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaUserGraduate } from 'react-icons/fa';

function LearnersCount() {
    const [count, setCount] = useState(0);
    const fetchData = async () => {
        try {
            const response = await axios.get(' http://localhost:5199/api/Dashboard/GetTotalLearners');
            // console.log(response.data.data);
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
            <FaUserGraduate size={30} />
            <h5 className="card-title">Number of Learners</h5>
            <p className="card-text">Count: <span id="learnerCount">{count}</span></p>
        </div>
    )
}

export default LearnersCount
