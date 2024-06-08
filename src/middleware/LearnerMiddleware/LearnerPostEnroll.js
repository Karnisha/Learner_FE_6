import { enrollRequest, enrollSuccess, enrollFailure } from '..//../actions/LearnerAction/LearnerPostEnrollAction';
 
export default function LearnerPostEnroll({ dispatch, getState }) {
    return (next) => (action) => {
        next(action);
 
        if (action.type === enrollRequest().type) {
            const { courseId } = action;
            const learnerId = sessionStorage.getItem('UserSessionID'); // Retrieve learner ID from session storage
            const enrollmentEndpoint = "http://localhost:5199/lxp/enroll";
            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId: courseId,
                    learnerId: learnerId,
                    enrollmentDate: new Date().toISOString(),
                    enrollStatus: true,
                    enrollRequestStatus: true,
                }),
            };
 
            fetch(enrollmentEndpoint, request)
                .then((response) => {
                    if (response.ok) {
                        return response.json().then((data) => {
                            dispatch(enrollSuccess(courseId, learnerId)); // Include learnerId
                            return data;
                        });
                    } else {
                        return response.text().then((errorText) => {
                            console.error("Server Error Response:", errorText); // Log the error response text
                            throw new Error(errorText || "Enrollment failed. Please try again later.");
                        });
                    }
                })
                .catch((error) => {
                    console.error("Enrollment Error:", error);
                    dispatch(enrollFailure(error));
                });
        }
    };
}