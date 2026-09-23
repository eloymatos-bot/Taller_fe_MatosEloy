import { Component } from '@angular/core';

interface NavLink {
  id: number;
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuAbierto = false;

  readonly nombreMarca = 'Nexus Gamer';
  readonly ubicacion = 'Cañete / Perú';
  readonly enlaces: NavLink[] = [
    { id: 1, label: 'Inicio', target: '#inicio' },
    { id: 2, label: 'Productos', target: '#productos' },
    { id: 3, label: 'Nosotros', target: '#nosotros' },
    { id: 4, label: 'Contacto', target: '#contacto' }
  ];

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

}
