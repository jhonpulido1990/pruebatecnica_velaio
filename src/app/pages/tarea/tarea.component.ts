import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TemplateTareaComponent } from 'src/app/shared/templates/template-tarea/template-tarea.component';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/core/service/form.service';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, AccordionModule, TemplateTareaComponent],
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private formService = inject(FormService);
  public tareaId: string | null = null;

  ngOnInit(): void {
    // Verifica si el parámetro `id` existe
    this.route.paramMap.subscribe((params) => {
      this.tareaId = params.get('id'); // Obtiene el parámetro `id`
      if (this.tareaId) {
        // Lógica para cuando `id` está presente
        console.log(`Cargando tarea con id: ${this.tareaId}`);
      } else {
        // Lógica para cuando no hay `id`
        console.log('No se ha proporcionado un id');
      }
    });
  }
}
