import { Component } from '@angular/core';
import { InicioComponent } from './features/landing/pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexus-gamer-canete';
}
