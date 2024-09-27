import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TemplateTareaComponent } from 'src/app/shared/templates/template-tarea/template-tarea.component';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, AccordionModule, TemplateTareaComponent],
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {

}
