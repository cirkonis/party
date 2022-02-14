import { Component, OnInit } from '@angular/core';
import IInvite from './Invite';
import {PartyService} from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  invites: IInvite[] = [];

  constructor(private partyService: PartyService) {}

  async ngOnInit(): Promise<void> {
    await this.partyService.listInvites().subscribe(invites => this.invites = invites);
  }




  async updateInviteRSVP(invite: IInvite): Promise<void>{
      invite.name = 'i have updated permantly';
      await this.partyService.updateTodo(invite).subscribe(async () => {
        await this.partyService.listInvites().subscribe(invites => this.invites = invites);
      });
  }

}
