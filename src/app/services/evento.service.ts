import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private apiUrl = 'http://localhost:4000/api/eventos'; // Reemplaza con tu URL base

  constructor(private http: HttpClient) {}


  // Crear un nuevo evento
  createEvento(evento: Evento): Observable<any> {
    return this.http.post(`${this.apiUrl}`, evento);
  }

  // Obtener todos los eventos
  getEventos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener un evento por ID
  getEventoById(id: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un evento
  updateEvento(id: string, evento: Evento): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, evento);
  }

  // Eliminar un evento
  deleteEvento(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Agregar un usuario inscrito al evento
  addUsuarioInscrito(eventoId: string, usuario: { usuario: string; activo: boolean }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventoId}/usuarios-inscritos`, usuario);
  }

  // Obtener usuarios inscritos de un evento
  getUsuariosInscritos(eventoId: string): Observable<{ usuario: string; activo: boolean }[]> {
    return this.http.get<{ usuario: string; activo: boolean }[]>(`${this.apiUrl}/${eventoId}/usuarios-inscritos`);
  }
}
