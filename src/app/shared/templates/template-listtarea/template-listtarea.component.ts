import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadtareaComponent } from '../../organism/readtarea/readtarea.component';

@Component({
  selector: 'app-template-listtarea',
  standalone: true,
  imports: [CommonModule, ReadtareaComponent],
  templateUrl: './template-listtarea.component.html',
  styleUrls: ['./template-listtarea.component.scss']
})
export class TemplateListtareaComponent {

}
