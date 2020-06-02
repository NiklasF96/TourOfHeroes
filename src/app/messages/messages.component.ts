import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //message service property must be PUBLIC. (bind it in the template)
  constructor( public messageService: MessageService ) { }

  ngOnInit(): void {
  }

}
