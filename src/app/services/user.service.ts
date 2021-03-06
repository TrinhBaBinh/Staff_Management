import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user/user';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('http://localhost:8080/user');
  }

  getById(id: number) {
    return this.http.get('http://localhost:8080/user/' + id);
  }

  create(user: User) {
    return this.http.post('http://localhost:8080/add', user);
  }

  update(user: User) {
    return this.http.put('http://localhost:8080/update/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/delete/' + id);
  }
}
