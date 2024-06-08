import { FETCH_PDF_REQUEST, FETCH_PDF_SUCCESS, FETCH_PDF_FAILURE } from "../../actions/LearnerAction/FetchPdfAction";

const initialState = {
    material: [],
    loading: false,
    error: null,
};

const fetchPdfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PDF_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PDF_SUCCESS:
            console.log("successfull action result:",action.payload)
            return {
                ...state,
                material: action.payload,
                loading: false,
            };
        case FETCH_PDF_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state; // Added default case to handle unrecognized actions
    }
};

export default fetchPdfReducer;