import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:3000/formularios'; // URL del JSON Server

  private http = inject(HttpClient);

  // Método para enviar el formulario al JSON Server
  saveForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  // Método para obtener todos los formularios
  getForms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para actualizar un formulario
  updateForm(id: string, formData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  // Método para eliminar un formulario
  deleteForm(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
