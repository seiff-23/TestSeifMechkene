import { Component, input } from '@angular/core';
import { Trip } from '../../models/trip';
import {TripList} from '../trip-list/trip-list';

@Component({
  imports: [TripList],
  selector: 'seif-trip-item',
  styleUrl: './trip-item.css',
  templateUrl: './trip-item.html',
})
export class TripItem {
  trip = input.required<Trip>();
  indice = input.required<number>();

  onReserve() {
    if (this.trip.nbPlaces > 0) {
      this.trip.nbPlaces--;
    }
  }

}
