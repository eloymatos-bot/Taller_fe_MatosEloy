import { Component } from '@angular/core';

interface HeroStat {
  id: number;
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  readonly eyebrow = 'Gaming store & setup / Cañete';
  readonly title = 'Sube de nivel tu espacio de juego.';
  readonly description = 'Hardware, periféricos y accesorios elegidos para quienes no se conforman con jugar: quieren sentir cada partida.';
  readonly primaryCta = 'Ver productos';
  readonly secondaryCta = 'Conocer la tienda';
  readonly visualLabel = 'NEXUS / 001';
  readonly visualTitle = 'Build your arena';
  readonly stats: HeroStat[] = [
    { id: 1, value: '120+', label: 'productos en catálogo' },
    { id: 2, value: '24 h', label: 'respuesta de soporte' },
    { id: 3, value: '4.9/5', label: 'valoración gamer' }
  ];

}
