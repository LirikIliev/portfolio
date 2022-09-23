import { deletePet } from "../api/services.js";

export async function deletePage(ctx) {
    await deletePet(ctx.params.petId);
    ctx.page.redirect(`/dashboard`);
    ctx.removeLoader();
}