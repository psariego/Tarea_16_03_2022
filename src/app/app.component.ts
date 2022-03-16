import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-16-03-2020';

  numero: number = 7;
  nombre: string = '';
  espacios: string = 'Sin espacios';
}
