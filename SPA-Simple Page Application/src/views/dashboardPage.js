import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/services.js";
import { getUserData } from "../util.js";

export async function dashboardPage(ctx) {
    let appPets = await getAll()
    let user = getUserData();
    ctx.render(dashboardTemplate(appPets, user))
    ctx.removeLoader();
};

const dashboardTemplate = (data, user) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${data.length >= 1
        ? data.map(p => dashBoardSingleTemplate(p, user))
        : noPetsDashBoardTemplate()}
    </div>
</section>`;

const dashBoardSingleTemplate = (data) => html`
<div class="animals-dashboard">
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${data.image}>
        </article>
        <h2 class="name">${data.name}</h2>
        <h3 class="breed">${data.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${data._id}">Details</a>
        </div>
    </div>`;
const noPetsDashBoardTemplate = () => html`
    <div>
        <p class="no-pets">No pets in dashboard</p>
    </div>`;