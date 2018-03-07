import axios from "axios";

export function getWishlistsByUserId(id) {
    const request = axios.get(`/api/users/${id}/wishlists`);
    return {
        type: "GET_WISHLISTS_BY_USER_ID",
        payload: request
    }
}

export function createWishlist(data) {
    const request = axios.post(`/api/wishlists`, data);
    return {
        type: "CREATE_WISHLIST",
        payload: request
    }
}

export function removeWishlist(id) {
    const request = axios.delete(`/api/wishlists/${id}`);
    return {
        type: "REMOVE_WISHLIST",
        payload: request
    }
}