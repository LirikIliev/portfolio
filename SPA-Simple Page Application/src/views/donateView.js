import { donateForPet } from "../api/services.js";

export async function donatePage(ctx) {
    let petId = ctx.params.petId;
    await donateForPet({ petId });
    ctx.removeLoader();
    ctx.page.redirect(`/details/${ctx.params.petId}`);
}