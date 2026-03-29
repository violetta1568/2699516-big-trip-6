import { getRandomPoint } from "../mock/point";
import { mockOffer} from "../mock/offer";
import {mockDestination } from "../mock/destination.js";
const POINT_COUNT = 4;

export default class PointModel{
    point = Array.from({length:POINT_COUNT}, getRandomPoint);
    destination = mockDestination;
    offer = mockOffer;

    getPoints(){
        return this.point;
    }

    getDestinations(){
        return this.destination;
    }

    getOffers(){
        return this.offer;
    }

    getDestinationById(id){
        const allDestinations = this.getDestinations();
        return allDestinations.find((item) => item.id === id);
    }

    getOffersByType(type){
        const allOffers = this.getOffers();
        return allOffers.find((item) => item.type === type);
    }

    getOffersById(type, itemsId){
        const offersType = this.getOffersByType(type);
        if (!offersType) return [];
        return offersType.offers.filter((item) => itemsId?.includes(item.id));
    }
}