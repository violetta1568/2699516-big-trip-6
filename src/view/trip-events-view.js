import { createElement } from '../render.js';

function createTripEventsTemplate() {
  return `
    <section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
      <ul class="trip-events__list"></ul>
    </section>
  `;
}

export default class TripEvents {
  getTemplate() {
    return createTripEventsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}