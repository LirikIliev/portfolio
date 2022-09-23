import page from '../node_modules/page/page.mjs'
import { decorateCtx } from './middleware/contextRender.js';
import { navBarNavigation } from './middleware/dynamicNavbar.js';
import { createPostcardPage } from './views/createPostcardPage.js';
import { dashboardPage } from './views/dashboardPage.js';
import { deletePage } from './views/deleteView.js';
import { detailsPage } from './views/detailsView.js';
import { donatePage } from './views/donateView.js';
import { editPage } from './views/editView.js';
import { homePage } from './views/homeView.js';
import { loginPage } from './views/loginPage.js';
import { logoutPage } from './views/logoutView.js';
import { registerPage } from './views/registerPage.js';


page(decorateCtx);
page(navBarNavigation);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/create-postcard', createPostcardPage);
page('/logout', logoutPage);
page('/details/:petId', detailsPage);
page('/edit/:petId', editPage);
page('/remove/:petId', deletePage);
page('/donate/:petId', donatePage);

page.start();