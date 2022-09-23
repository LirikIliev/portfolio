import { getUserData } from "../util.js";
export function addSession(ctx, next) {
    let state = getUserData()
    ctx.user = state
    next();
}