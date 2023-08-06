import { html} from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

//TODO Replace with actual view
const catalogTemplate = (offers) => html`
    <h2>Fruits</h2>
        <section id="dashboard">

        ${offers.length > 0 ? offers.map(offerCard) : html`
          <h2>No fruit info yet.</h2>`}
           
        </section>`;

        const offerCard = (offer) => html`
           <div class="fruit">
            <img src=${offer.imageUrl} alt="example1" />
            <h3 class="title">${offer.name}</h3>
            <p class="description">${offer.description}</p>
            <a class="details-btn" href="/catalog/${offer._id}">More Info</a>
          </div>`;

export async function catalogPage(ctx) {
    const offers = await getAllOffers();
    ctx.render(catalogTemplate(offers));
}