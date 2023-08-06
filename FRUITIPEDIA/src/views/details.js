import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteOffer, getById } from "../data/offers.js";
import { getUserData } from "../util.js";

const detailsTemplate = (offer, onDelete) => html` 
  <!-- Details page -->
  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.name}</p>
            <div id="info-wrapper">
              <div id="details-description"><p>${offer.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${offer.nutrition}</p>
              </div>
               <!--Edit and Delete are only for creator-->
          ${offer.canEdit ? html`
          <div id="action-buttons">
            <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>
            </div>
        </div>` : null}

        </div>
          </div>
  </section>`;


export async function detailsPage(ctx) {
  const id = ctx.params.id;

  const offer = await getById(id);

  const userData = getUserData();

  if (userData && userData._id == offer._ownerId) {
    offer.canEdit = true;
  }

  ctx.render(detailsTemplate(offer, onDelete));

  async function onDelete() {
    const choice = confirm('Are you sure?');

    if (choice) {
      await deleteOffer(id);
      ctx.page.redirect('/catalog');
    }
  }
}