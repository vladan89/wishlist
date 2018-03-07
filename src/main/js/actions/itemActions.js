import axios from "axios";

export function getItemsByWishlistId(id) {
    const request = axios.get(`/api/wishlists/${id}/items`);
    return {
        type: "GET_ITEMS_BY_WISHLIST_ID",
        payload: request
    }
}

export function createItem(data) {
    const request = axios.post(`/api/items`, data);
    return {
        type: "CREATE_ITEM",
        payload: request
    }
}

export function removeItem(id) {
    const request = axios.delete(`/api/items/${id}`);
    return {
        type: "REMOVE_ITEM",
        payload: request
    }
}
