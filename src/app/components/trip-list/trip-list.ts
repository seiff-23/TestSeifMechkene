import { Component, computed, signal } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripItem } from '../trip-item/trip-item';

@Component({
  imports: [TripItem],
  selector: 'seif-trip-list',
  styleUrl: './trip-list.css',
  templateUrl: './trip-list.html',
})
export class TripList {
  voyages = signal<Trip[]>([
    {
      id: 587,
      destination: 'Bali',
      photo: 'photos/bali.jpg',
      price: 7800,
      nbDays: 11,
      nbPlaces: 12,
      visa: true,
    },
    {
      id: 183,
      destination: 'turquie',
      photo: 'photos/turquie.jpg',
      price: 4300,
      nbDays: 7,
      nbPlaces: 8,
      visa: false,
    },
    {
      id: 25,
      destination: 'Egypte',
      photo: 'photos/egypte.jpg',
      price: 4100,
      nbDays: 14,
      nbPlaces: 15,
      visa: true,
    },
    {
      id: 399,
      destination: 'Algerie',
      photo: 'photos/algerie.jpg',
      price: 850,
      nbDays: 9,
      nbPlaces: 11,
      visa: false,
    },
  ]);
  nbVoyages = computed(() => this.voyages().length);
  afficherVoyages() {
    const messages = console.log('voyages affichés');
}}
