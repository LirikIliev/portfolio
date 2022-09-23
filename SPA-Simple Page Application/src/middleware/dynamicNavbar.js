import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util.js";
const root = document.querySelector('.navbar-header');

export const navBarNavigation = (ctx, next) => {
    let user = getUserData();
    render(navbarTemplate(user), root);
    ctx.removeLoader();
    next();
}

const navbarTemplate = (user) => html`
<nav>
    <section class="logo">
        <a href="/"><img src="/images/logo.png" alt="logo"></a>
    </section>
    <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        ${user 
        ?loggedUser() 
        :guests()}
    </ul>
</nav>`;
const loggedUser = () => html`
        <li><a href="/create-postcard">Create Postcard</a></li>
        <li><a href="/logout">Logout</a></li>`;
const guests = () => html`
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>`;



