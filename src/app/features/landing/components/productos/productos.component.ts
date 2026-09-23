import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: string;
  icono: string;
  etiqueta: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  readonly eyebrow = 'Selección de la semana';
  readonly titulo = 'Tu siguiente upgrade está aquí.';
  readonly descripcion = 'Equipamiento probado para transformar cada partida en una experiencia más precisa, cómoda y poderosa.';
  readonly productos: Producto[] = [
    { id: 1, nombre: 'Pulse K68', categoria: 'Teclado mecánico', descripcion: 'Switches lineales, estructura compacta y respuesta instantánea.', precio: 'S/ 289', icono: '⌨', etiqueta: 'Más vendido' },
    { id: 2, nombre: 'Vector Air', categoria: 'Mouse ultraligero', descripcion: 'Sensor de alta precisión en un chasis de solo 58 gramos.', precio: 'S/ 219', icono: '◉', etiqueta: 'Nuevo' },
    { id: 3, nombre: 'Echo Pro X', categoria: 'Audio gaming', descripcion: 'Audio espacial y micrófono nítido para coordinar cada ronda.', precio: 'S/ 349', icono: '◒', etiqueta: 'Favorito' },
    { id: 4, nombre: 'Frame 27', categoria: 'Monitor 180 Hz', descripcion: 'Panel fluido QHD para ver antes la jugada y disfrutar cada detalle.', precio: 'S/ 1,199', icono: '▣', etiqueta: 'Oferta' }
  ];

}
