import { Component, OnInit } from '@angular/core';
import {IInvite, INVITES} from './invites';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  // @ts-ignore
  invites: IInvite[] = INVITES;

  constructor() {}

  ngOnInit(): void {
  }




  updateInviteRSVP(invite: IInvite): void{
    const inviteIndex = this.invites.findIndex(i => i.id === invite.id);
    this.invites[inviteIndex].rsvp = invite.rsvp;
  }

}
