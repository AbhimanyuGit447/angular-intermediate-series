import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  message : string = '';
  newMessage : string ='';

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    // subscrive to our data;
    //service
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });
  }

  updateMessage(): void {
    if (this.newMessage) {
      this.dataService.updateMessage(this.newMessage);
      this.newMessage = ''; // Clear the input
    }
  }


}
