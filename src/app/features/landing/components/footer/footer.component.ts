import { Component } from '@angular/core';

interface FooterLink {
  id: number;
  label: string;
  target: string;
}

interface SocialLink {
  id: number;
  name: string;
  handle: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly nombreMarca = 'Nexus Gamer';
  readonly descripcion = 'Tecnología gamer seleccionada para construir espacios de juego que se sienten tan bien como funcionan.';
  readonly enlaces: FooterLink[] = [
    { id: 1, label: 'Inicio', target: '#inicio' },
    { id: 2, label: 'Productos', target: '#productos' },
    { id: 3, label: 'Nosotros', target: '#nosotros' },
    { id: 4, label: 'Contacto', target: '#contacto' }
  ];
  readonly redes: SocialLink[] = [
    { id: 1, name: 'Instagram', handle: '@nexusgamer.pe' },
    { id: 2, name: 'TikTok', handle: '@nexusgamer' },
    { id: 3, name: 'Discord', handle: 'Nexus Cañete' }
  ];
  readonly anio = 2026;

}
