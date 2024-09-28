import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from 'src/app/core/service/form.service';
import { Tarea } from 'src/app/core/model/tarea.intefaces';

@Component({
  selector: 'app-readtarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './readtarea.component.html',
  styleUrls: ['./readtarea.component.scss']
})
export class ReadtareaComponent implements OnInit {
  public listTareas = signal<Tarea[]>([])
  private formService = inject(FormService)

  ngOnInit() {
    this.loadTareas()
  }

  loadTareas() {
    this.formService.getForms().subscribe({
      next: (tareas) => {
        this.listTareas.set(tareas);
      }
    })
  }

  updateStatus(tarea: Tarea) {
    tarea.estado = !tarea.estado
    this.formService.updateForm(tarea.id, tarea).subscribe({
      next: () => {
        console.log(tarea)
        this.loadTareas()
      }
    })
  }

  deleteTarea(id: string) {
    this.formService.deleteForm(id).subscribe({
      next: () => {
        console.log('eliminada la tarea');
        this.loadTareas()
      }
    })
  }
}
