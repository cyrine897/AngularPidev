import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Role } from '../models/role';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8089/pidev/back/task'; // Remplacez cela par l'URL réelle de votre backend

  constructor(private http : HttpClient) { }
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/getAllTask`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/addTask`, task);
  }
 
  getOrganizerAssignments(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/getOrganiserAssignments`);
  }
  

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/UpdateTask`, task);
  }

  retrieveTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/retriveTask/${id}`);
  }

  removeTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeTask/${id}`);
  }
  affecterTaskATask(idUser: number, idTask: number): Observable<Task[]> {
    const body = {}; // Vous pouvez remplir le corps avec des données si nécessaire
  
    return this.http.post<Task[]>(`${this.baseUrl}/affecterTaskATask/${idUser}/${idTask}`, body);
  }
  sendEmail(emailRequest: any): Observable<string> {
    const url = `${this.baseUrl}/email`;
    return this.http.post<string>(url, emailRequest);
  } 
  getAffectationRequests(userForm: FormGroup): Observable<any> {
    // Utilisez UserForm.value pour accéder aux valeurs du formulaire
    return this.http.get(`${this.baseUrl}/affectation-requests`, { params: userForm.value });
  }
// task.service.ts


acceptAffectationRequest(requestId: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/accept/${requestId}`, {});
}

rejectAffectationRequest(requestId: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/reject/${requestId}`, {});
}

 
  search(query: string): Observable<any[]> {
    // Implémentez ici votre logique de recherche
    // Cela peut inclure une requête HTTP à un serveur, une recherche dans une liste locale, etc.

    // Dans cet exemple, nous renvoyons simplement une liste de résultats factice
    const results = ['Résultat 1', 'Résultat 2', 'Résultat 3'];
    return of(results);
  }
  
}