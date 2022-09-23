import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/services.js";
let context;

export async function registerPage(ctx) {
    ctx.render(registerTemplate())
    ctx.removeLoader();
    context = ctx;
}


const registerTemplate = (data) => html`
<section id="registerPage">
    <form class="registerForm" @submit=${submitRegisterData}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`;


async function submitRegisterData(e) {
    e.preventDefault();
    const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.target));
    if (password === repeatPassword) {
        if (email && password) {
            await register(email, password);
            e.target.reset();
            context.page.redirect('/')
        } else {
            alert('Please fill all fields correctly!')
        }
    } else {
        alert('Password and repeat password must be equal!')
    }
}