import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IInvite from './Invite';
@Injectable({
  providedIn: 'root',
})
export class PartyService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://students-dot-sharkcell.ew.r.appspot.com/entities';

  listInvites(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  updateTodo(invite: IInvite): Observable<any> {
    return this.http.put(`${this.apiURL}/${invite.id}/update`, invite);
  }
}
