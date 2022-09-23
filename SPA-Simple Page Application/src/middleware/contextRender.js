import { render } from '../../node_modules/lit-html/lit-html.js';
const loader = document.querySelector('#spinner');
function show() {
    loader.style.display = 'flex';
};
function hide() {
    loader.style.display = 'none';
};
const root = document.querySelector('main');
function ctxRender(context) {
    render(context, root)
}
export function decorateCtx(ctx, next) {
    show();
    ctx.render = ctxRender;
    ctx.removeLoader = hide;
    next();
};