
import Point from '../view/route-point-view.js';
import CreateForm from '../view/form-edit-view.js';
import TripEvents from '../view/trip-events-view.js';
import Filter from '../view/filters-view.js';      
import Sort from '../view/sort-view.js';           

import { render, RenderPosition } from '../render.js';

export default class TripPresenter {
  constructor({ container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
    this.pointViews = [];
  }

  init() {
    const points = this.pointsModel.getPoints();
    const destinations = this.pointsModel.getDestinations();

    let tripControls = document.querySelector('.trip-controls');
    if (!tripControls) {
      tripControls = document.createElement('section');
      tripControls.className = 'trip-controls';
      tripControls.innerHTML = '<h2 class="visually-hidden">Filter</h2>';
      const tripMain = document.querySelector('.trip-main');
      if (tripMain) tripMain.appendChild(tripControls);
    }

    const tripEventsContainer = document.querySelector('.trip-events');
    if (!tripEventsContainer) {
      const eventsSection = document.createElement('section');
      eventsSection.className = 'trip-events';
      this.container.appendChild(eventsSection);
    }

    render(new Filter(), tripControls, RenderPosition.BEFOREEND);

const firstPoint = points[0];
const destination = destinations.find(dest => dest.id === firstPoint.destination);
const offersByType = this.pointsModel.getOffersByType(firstPoint.type);

render(new CreateForm(firstPoint, destination, offersByType?.offers || []), this.container, RenderPosition.BEFOREEND);
    const tripEventsComponent = new TripEvents();
    render(tripEventsComponent, this.container, RenderPosition.BEFOREEND);

    const eventsList = document.querySelector('.trip-events__list');
    if (!eventsList) return;

    eventsList.innerHTML = '';

    points.forEach(point => {
      const destination = destinations.find(dest => dest.id === point.destination);
      const offersByType = this.pointsModel.getOffersByType(point.type);
      const pointOffers = offersByType ? offersByType.offers.filter(offer =>
        point.offers?.includes(offer.id)
      ) : [];

      const pointView = new Point(point, destination, pointOffers);
      render(pointView, eventsList, RenderPosition.BEFOREEND);
      this.pointViews.push(pointView);
    });
  }
}