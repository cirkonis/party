import { Component, OnInit } from '@angular/core';
import IInvite from './Invite';
import {PartyService} from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  coolPeople: IInvite[] = [];
  shitPeople: IInvite[] = [];

  constructor(private partyService: PartyService) {}

  ngOnInit(): void {
    this.loadInvites();
  }

  loadInvites(): void{
    let invites: IInvite[] = [];
    this.coolPeople = [];
    this.shitPeople = [];
    this.partyService.listInvites().subscribe((data: any) => {
      invites = data.data;
      this.sortTheCoolFromtheUncool(invites);
    });
  }

  sortTheCoolFromtheUncool(invites: IInvite[]): void{
    for (const invite of invites){
      if (invite.rsvp === 1){
        this.coolPeople.push(invite);
      } else{this.shitPeople.push(invite); }
    }
  }

  makeShit(invite: IInvite): void {
    if (this.checkPasscode()){
      this.updateInviteRsvp(invite, 0);
    }
  }

  makeCool(invite: IInvite): void {
    if (this.checkPasscode()){
      this.updateInviteRsvp(invite, 1);
    }
  }

  checkPasscode(): boolean {
    return true;
  }

  updateInviteRsvp(invite: IInvite, coolness: 0 | 1): void{
    console.log(invite);
    const inviteToUpdate = {
      id: invite.id,
      rsvp: coolness,
      passcode: invite.passcode,
      name: invite.name
    };
    console.log(inviteToUpdate);
    this.partyService.updateInvite(inviteToUpdate).subscribe(() => {
      this.loadInvites();
    });
  }

}
