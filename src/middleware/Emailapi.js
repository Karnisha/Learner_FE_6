import axios from 'axios';

const emailMiddleware = (store) => (next) => (action) => {
    if (action.type === 'SUBMIT_EMAIL') {
        store.dispatch({ type: 'SUBMIT_EMAIL_REQUEST' }); // Dispatch a request action (optional)
        axios.post('/api/sendemail', { email: action.payload.email })
            .then((response) => {
                store.dispatch({ type: 'SUBMIT_EMAIL_SUCCESS' }); // Dispatch a success action (optional)
            })
            .catch((error) => {
                store.dispatch({ type: 'SUBMIT_EMAIL_FAILURE', payload: { error } }); // Dispatch a failure action with error (optional)
            });
    } else {
        next(action);
    }
};

export default emailMiddleware