import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  readonly eyebrow = 'Hablemos de tu setup';
  readonly titulo = '¿Listo para tu próximo upgrade?';
  readonly descripcion = 'Cuéntanos qué juegas, qué equipo tienes y qué quieres mejorar. Te responderemos con una recomendación honesta.';
  readonly correo = 'hola@nexusgamer.pe';
  readonly telefono = '+51 945 620 318';
  readonly horario = 'Lun - Sáb / 10:00 - 20:00';
  mensajeEnviado = false;

  enviarConsulta(evento: SubmitEvent): void {
    evento.preventDefault();
    this.mensajeEnviado = true;
  }

}
