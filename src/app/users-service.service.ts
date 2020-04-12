import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsers } from 'src/Users';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export default class UsersServiceService {
  UsersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  UsersLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get Todos
  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${this.UsersUrl}${this.UsersLimit}`);
  }
}
