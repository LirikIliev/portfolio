import * as api from "./userService";

const host = "http://localhost:3030";

export async function getSortedByDate() {
    return await api.get(host + `/`);
};

export async function getAll() {
    return await api.get(host + `/all-posts`);
};

export async function getCurrent(id) {
    return await api.get(host + `/details/` + id);
};

export async function getAllUserTrips() {
    return await api.get(host + `/my-posts`);
};

export async function createTrip(data) {
    return await api.post(host + '/create-trip', data);
};

export async function editTrip(id, data) {
    return await api.put(host + '/edit-trip/' + id, data);
};

export async function deleteTrip(id) {
    return await api.del(host + '/delete-trip/' + id);
};

export async function likeTrip(id, data) {
    return await api.post(host + '/like/' + id, data);
};
export async function dislikeTrip(id, data) {
    return await api.post(host + '/dislike/' + id, data);
};