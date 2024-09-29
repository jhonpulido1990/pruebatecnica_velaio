import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TemplateTareaComponent } from 'src/app/shared/templates/template-tarea/template-tarea.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, AccordionModule, TemplateTareaComponent],
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
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
        this.router.navigate(['/'])
      }
    });
  }
}
