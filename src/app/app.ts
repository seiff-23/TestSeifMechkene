import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripList } from './components/trip-list/trip-list';

@Component({
  imports: [RouterOutlet, TripList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TestSeifMechkene');
}
