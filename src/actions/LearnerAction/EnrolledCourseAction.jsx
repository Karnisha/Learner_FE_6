export const FETCH_LEARNER_COURSE='FETCH_LEARNER_COURSE';
export const FETCH_LEARNER_SUCCESS='FETCH_LEARNER_SUCCESS';
export const SELECT_COURSE = 'SELECT_COURSE';


export const fetchenrollCourse=(learnerId)=>({
    type:FETCH_LEARNER_COURSE,
    payload:learnerId,
})

export const fetchenrollsuccess=(course)=>({
    type:FETCH_LEARNER_SUCCESS,
    // console.log(course);
    payload:course,
})

export const selectCourse = (course) => ({
    type: SELECT_COURSE,
    payload: course,
    
    
});


export const fetchAllEnrollCourses=()=>({
    type:FETCH_LEARNER_COURSE,
})