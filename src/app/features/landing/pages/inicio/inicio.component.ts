import { Component } from '@angular/core';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { ProductosComponent } from '../../components/productos/productos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ProductosComponent, NosotrosComponent, ContactoComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
