import { Route } from "@angular/router";
import { TareaComponent } from "./tarea/tarea.component";
import { ListTareaComponent } from "./list-tarea/list-tarea.component";

export const pagesRoutes: Route[] = [
  {
    path: '',
    component: TareaComponent,
    title: 'tareas',
  },
  {
    path: ':id',
    component: TareaComponent,
    title: 'tareas',
  },
  {
    path: 'home/list',
    component: ListTareaComponent,
    title: 'Lista-de-tareas',
  },
];
