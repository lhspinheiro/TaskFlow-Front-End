import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListTask } from '../Models/Task';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = environment.UrlApi;

  constructor(private http: HttpClient) { }


  GetTask(): Observable<Response<ListTask[]>>{
    return this.http.get<Response<ListTask[]>>(this.apiUrl);
  }

  DeleteTask(id:number | undefined):Observable<Response<ListTask>>{
    return this.http.delete<Response<ListTask>>(`${this.apiUrl}/${id}`);
  }

  RegisterTask(task:ListTask): Observable<Response<ListTask[]>>{
    return this.http.post<Response<ListTask[]>>(this.apiUrl, task);
  }

  GetTaskById(id:number): Observable<ListTask>{
    return this.http.get<ListTask>(`${this.apiUrl}/${id}`)
  }

  EditTask(id:number, task: ListTask): Observable<Response<ListTask>>{
    return this.http.put<Response<ListTask>>(`${this.apiUrl}/${id}`, task);
  }
}
