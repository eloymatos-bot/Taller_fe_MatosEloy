import { Component } from '@angular/core';

interface DatoMarca {
  id: number;
  valor: string;
  label: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  readonly eyebrow = 'La filosofía Nexus';
  readonly titulo = 'No vendemos accesorios. Diseñamos ventajas.';
  readonly descripcion = 'Nexus Gamer Cañete nace para acercar tecnología confiable a la comunidad gamer local. Probamos, comparamos y recomendamos cada pieza pensando en tu forma de jugar.';
  readonly datos: DatoMarca[] = [
    { id: 1, valor: '120+', label: 'productos seleccionados' },
    { id: 2, valor: '4.9/5', label: 'experiencia de clientes' },
    { id: 3, valor: '100%', label: 'asesoría personalizada' },
    { id: 4, valor: 'Cañete', label: 'nuestro punto de partida' }
  ];

}
