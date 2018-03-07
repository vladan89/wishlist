import axios from "axios";

export function getLoggedUserId() {
    const request = axios.get(`/security/logged`);
    return {
        type: "GET_LOGGED_USER_ID",
        payload: request
    }
}