import * as api from './api.js';
// /data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count
const endPoints = {
    all: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    byId: '/data/pets/',
    donatedUser: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    petDonation: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    creatTeam: '/data/pets',
    delete: '/data/pets/',
    donate: '/data/donation',
};

export async function getAll() {
    return api.get(endPoints.all);
};
export async function getPetById(id) {
    return api.get(endPoints.byId + id)
};
export async function getUserForCurrentPat(petId, userId) {
    return api.get(endPoints.donatedUser(petId, userId))
};
export async function getPetDonation(petId) {
    return api.get(endPoints.petDonation(petId))
};
export async function creatPet(data) {
    return api.post(endPoints.creatTeam, data)
};
export async function editPet(id, data) {
    return api.put(endPoints.byId + id, data)
};
export async function donateForPet(data) {
    return api.post(endPoints.donate, data)
};
// export async function petDonation() {
//     return api.get(endPoints.petDonation)
// };
export async function deletePet(id) {
    return api.del(endPoints.delete + id)
};

export async function login(email, password) {
    let result = await api.post('/users/login', { email, password });
    localStorage.setItem('user', JSON.stringify(result));
};
export async function register(email, password) {
    let result = await api.post('/users/register', { email, password });
    localStorage.setItem('user', JSON.stringify(result));
};
export async function logout() {
    await api.get('/users/logout');
    localStorage.removeItem('user');
}
