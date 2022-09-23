import { logout } from "../api/services.js";
import { getUserData } from "../util.js";

export async function logoutPage(ctx) {
    ctx.removeLoader();
    let user = getUserData();
    if(user){
        await logout();
    }
    ctx.page.redirect('/');
}