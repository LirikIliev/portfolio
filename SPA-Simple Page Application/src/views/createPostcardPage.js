import { html } from "../../node_modules/lit-html/lit-html.js";
import { creatPet } from "../api/services.js";
let context;
export async function createPostcardPage(ctx) {
    ctx.render(createPostcardTemplate())
    ctx.removeLoader();
    context = ctx;
}


const createPostcardTemplate = (data) => html`
<section id="createPage">
    <form class="createForm" @submit=${submitCreateAnimalInfo}>
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>`;

async function submitCreateAnimalInfo(e) {
    e.preventDefault();
    const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target));
    if (name && breed && age && weight && image) {
        await creatPet({ name, breed, age, weight, image });
        context.page.redirect('/');
    } else {
        alert('Please fill all fields correctly they must be filled!')
    }

}