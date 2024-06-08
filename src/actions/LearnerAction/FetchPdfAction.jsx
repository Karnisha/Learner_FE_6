export const FETCH_PDF_REQUEST='FETCH_PDF_REQUEST';
export const FETCH_PDF_SUCCESS='FETCH_PDF_SUCCESS';
export const FETCH_PDF_FAILURE='FETCH_PDF_FAILURE';

export const fetchPdfRequest=(data)=>({
    type:FETCH_PDF_REQUEST,
    payload:data,

})

export const fetchPdfSuccess=(pdf)=>({
     type:FETCH_PDF_SUCCESS,
     payload:pdf,
})

export const fetchPdfFailure=(error)=>({
    type:FETCH_PDF_FAILURE,
    payload:error,
})