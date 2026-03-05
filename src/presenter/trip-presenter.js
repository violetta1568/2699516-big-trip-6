
import Point from '../view/route-point-view.js';
import CreateForm from '../view/form-edit-view.js';
import TripEvents from '../view/trip-events-view.js';

import { render, RenderPosition } from '../render.js';

export default class TripPresentor{
  constructor({ container}) {
    this.container = container;
  }

  init(){
    render(new CreateForm(), this.container, RenderPosition.BEFOREEND);
    render (new TripEvents(), this.container, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3;i++){
      render(new Point, this.container, RenderPosition.BEFOREEND);
    }
  }
}
