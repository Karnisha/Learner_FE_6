export const UPDATE_WATCH_TIME_REQUEST='UPDATE_WATCH_TIME_REQUEST';
export const UPDATE_WATCH_TIME_SUCCESS='UPDATE_WATCH_TIME_SUCCESS';
export const UPDATE_WATCH_TIME_FAILURE='UPDATE_WATCH_TIME_FAILURE';
export const UPDATE_WATCH_TIME_EXISTS='UPDATE_WATCH_TIME_EXISTS';
export const UPDATE_WATCH_TIME_STATUS='UPDATE_WATCH_TIME_STATUS';


export const updateWatchTimeRequest=(data)=>({
    type:UPDATE_WATCH_TIME_REQUEST,
    payload:data,

})

export const updateWatchTimeSuccess=(pdf)=>({
     type: UPDATE_WATCH_TIME_SUCCESS,
     payload:pdf,
})

export const updateWatchTimeFailure=(error)=>({
    type:UPDATE_WATCH_TIME_FAILURE,
    payload:error,
})

export const updateWatchTimeExists=()=>({
    type:UPDATE_WATCH_TIME_EXISTS,
  });

export const updateWatchTimeStatus = (isRequesting) => ({
    type:UPDATE_WATCH_TIME_STATUS,
    payload: isRequesting,
  });