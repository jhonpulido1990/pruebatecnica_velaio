import { Route } from "@angular/router";
import { TareaComponent } from "./tarea/tarea.component";

export const pagesRoutes: Route[] = [
  {
    path: '', component: TareaComponent, title: 'tareas'
  }
]
