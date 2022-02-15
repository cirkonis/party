import { Component, OnInit } from '@angular/core';
import IInvite from './Invite';
import {PartyService} from './party.service';
import * as partyText from './party-text';
import {PartyDialogComponent} from './party-dialog/party-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  partyText = partyText;
  coolPeople: IInvite[] = [];
  shitPeople: IInvite[] = [];
  goodToGo: boolean;

  constructor(private partyService: PartyService, public dialog: MatDialog) {}

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
    if (this.checkPasscode(invite.passcode)){
      this.updateInviteRsvp(invite, 0);
    }
  }

  makeCool(invite: IInvite): void {
    const goodToGo = this.checkPasscode(invite.passcode);
    console.log(goodToGo);
    if (goodToGo){
      console.log('made it here');
      this.updateInviteRsvp(invite, 1);
    }
  }

  updateInviteRsvp(invite: IInvite, coolness: 0 | 1): void{
    const inviteToUpdate = {
      id: invite.id,
      rsvp: coolness,
      passcode: invite.passcode,
      name: invite.name
    };
    this.partyService.updateInvite(inviteToUpdate).subscribe(() => {
      this.loadInvites();
    });
  }

  checkPasscode(passcode: string): boolean {
    const dialogRef = this.dialog.open(PartyDialogComponent, {
      width: '250px',
      height: '250px',
      data: {passcode},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.goodToGo = result.result;
    });
    return this.goodToGo;
  }
}
