import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListtareaComponent } from 'src/app/shared/templates/template-listtarea/template-listtarea.component';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [CommonModule, TemplateListtareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.scss']
})
export class ListTareaComponent {

}
