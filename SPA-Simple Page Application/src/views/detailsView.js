import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getPetById, getPetDonation, getUserForCurrentPat } from "../api/services.js";
import { getUserData, getUserId } from "../util.js";

export async function detailsPage(ctx) {
    let petId = ctx.params.petId;
    let userId = getUserId();
    let user = getUserData()
    let petData = await getPetById(petId);
    let petDonation = await getPetDonation(petId)
    let isUserDonate = await getUserForCurrentPat(petId, userId);
    console.log(isUserDonate);
    ctx.render(detailsTemplate(petData, user, userId, petDonation, isUserDonate))
    ctx.removeLoader();
}
const detailsTemplate = (data, user, userId, petDonation, isUserDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${data.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${data.name}</h1>
                <h3>Breed: ${data.breed}</h3>
                <h4>Age: ${data.age}</h4>
                <h4>Weight: ${data.weight}</h4>
                <h4 class="donation">Donation: ${petDonation * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            ${user
            ? html`
            <div class="actionBtn">
                ${data._ownerId === userId
                ? html`
                <a href="/edit/${data._id}" class="edit">Edit</a>
                <a href="/remove/${data._id}" class="remove">Delete</a>`
                : nothing}
                <!--(Bonus Part) Only for no creator and user-->
                ${userId !== data._ownerId && isUserDonate === 0
                ? html`<a href="/donate/${data._id}" class="donate"> Donate</a>`
                : nothing}
            </div>`
        : nothing}
        </div>
    </div>
</section>`;