import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from 'src/app/core/service/form.service';
import { Tarea } from 'src/app/core/model/tarea.intefaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-readtarea',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './readtarea.component.html',
  styleUrls: ['./readtarea.component.scss'],
})
export class ReadtareaComponent implements OnInit {
  public listTareas = signal<Tarea[]>([]);
  public filterTareas = signal<Tarea[]>([]);
  public stateFilter: boolean | null = null;
  private formService = inject(FormService);

  ngOnInit() {
    this.loadTareas();
  }

  loadTareas() {
    this.formService.getForms().subscribe({
      next: (tareas) => {
        this.listTareas.set(tareas);
        this.filterTareas.set(tareas);
      },
    });
  }

  // Filtrar formularios con estado true (completados)
  filterFormsByTrueState(): void {
    const filtered = this.listTareas().filter((tarea) => tarea.estado === true);
    this.filterTareas.set(filtered);
    this.stateFilter = true;
  }

  // Filtrar formularios con estado false (pendientes)
  filterFormsByFalseState(): void {
    const filtered = this.listTareas().filter(
      (tarea) => tarea.estado === false
    );
    this.filterTareas.set(filtered);
    this.stateFilter = false;
  }

  // formularios con todos los estados
  formsAllState(): void {
    this.filterTareas.set(this.listTareas());
    this.stateFilter = null;
  }

  updateStatus(tarea: Tarea) {
    tarea.estado = !tarea.estado;
    this.formService.updateForm(tarea.id, tarea).subscribe({
      next: () => {
        console.log(tarea);
      },
    });
    if (this.stateFilter === true) this.filterFormsByTrueState();
    if (this.stateFilter === false) this.filterFormsByFalseState();
    if (this.stateFilter === null) this.formsAllState();
  }

  deleteTarea(id: string) {
    this.formService.deleteForm(id).subscribe({
      next: () => {
        console.log('eliminada la tarea');
        this.loadTareas();
      },
    });
  }
}
