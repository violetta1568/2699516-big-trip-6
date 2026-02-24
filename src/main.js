import TripPresenter from './presenter/trip-presenter.js';


const siteMainElement = document.querySelector('.page-main');
const container = siteMainElement.querySelector('.page-body__container');


const presenter = new TripPresenter({
  container: container
});

presenter.init();
