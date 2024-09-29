import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTareaComponent } from '../../organism/crud-tarea/crud-tarea.component';

@Component({
  selector: 'app-template-tarea',
  standalone: true,
  imports: [CommonModule, CrudTareaComponent],
  templateUrl: './template-tarea.component.html',
  styleUrls: ['./template-tarea.component.scss']
})
export class TemplateTareaComponent {
  @Input() id: string | null = null;
}
