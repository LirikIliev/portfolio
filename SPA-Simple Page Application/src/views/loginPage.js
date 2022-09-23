import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/services.js";
let context;
export async function loginPage(ctx) {
    ctx.render(loginTemplate());
    ctx.removeLoader();
    context = ctx;
}


const loginTemplate = (data) => html`
<section id="loginPage">
    <form class="loginForm" @submit=${submitLoginData}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`;

async function submitLoginData(e) {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    if (email && password) {
        await login(email, password);
        e.target.reset();
        context.page.redirect('/')
    }else{
        alert('Please fill all fields correctly!')
    }
}