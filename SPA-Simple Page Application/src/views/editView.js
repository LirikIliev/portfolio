import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPet, getPetById } from "../api/services.js";
let petId;
let context;
export async function editPage(ctx) {
    petId = ctx.params.petId;
    context = ctx;
    let petData = await getPetById(petId)
    ctx.render(editTemplate(petData))
    ctx.removeLoader();
}

const editTemplate = (data) => html`
<section id="editPage">
    <form class="editForm" @submit=${submitEditedPetInfo}>
        <img src="${data.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="${data.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="${data.breed} Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="${data.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="${data.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="${data.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;


async function submitEditedPetInfo(e) {
    e.preventDefault();
    const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target));
    if (name && breed && age && weight && image) {
        await editPet(petId, { name, breed, age, weight, image });
        context.page.redirect(`/details/${petId}`);
    } else {
        alert('Please fill all fields correctly they must be filled!')
    }

}