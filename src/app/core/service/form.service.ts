import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../model/tarea.intefaces';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:3000/formularios'; // URL del JSON Server

  private http = inject(HttpClient);

  // Método para enviar el formulario al JSON Server
  saveForm(formData: any): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, formData);
  }

  // Método para obtener todos los formularios
  getForms(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  // Método para actualizar un formulario
  updateForm(id: string, formData: any): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiUrl}/${id}`, formData);
  }

  // Método para obtener una tarea por su ID
  getTaskById(id: string): Observable<Tarea> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tarea>(url);
  }

  // Método para eliminar un formulario
  deleteForm(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
