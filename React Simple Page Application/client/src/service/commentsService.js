import * as api from "./userService";

const host = "http://localhost:3030";

export async function getAllComments(tripId) {
    return await api.get(host + `/details/${tripId}/get-all-comments`);
};

export async function createComment(commentId, data) {
    return await api.post(host + `/details/${commentId}/create-comment`, data);
};

export async function deleteComment(commentId) {
    return await api.del(host + `/details/${commentId}/delete-comment`);
};

export async function likeComment(commentId) {
    return await api.post(host + `/details/${commentId}/like-comment`);
};

export async function dislikeComment(commentId) {
    return await api.post(host + `/details/${commentId}/dislike-comment`);
};