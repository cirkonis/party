import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IInvite from './Invite';
@Injectable({
  providedIn: 'root',
})
export class PartyService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://student-app-api-dot-sharkcell.ew.r.appspot.com/secret/invites';

  listInvites(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  updateInvite(invite: IInvite): Observable<any> {
    return this.http.put(`${this.apiURL}`, invite);
  }
}
