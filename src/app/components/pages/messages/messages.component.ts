import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages = [];
 
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(private apiService: ApiService, private sharedService: SharedService) { }

  getMessages(){
    this.sharedService.LOADING =  true;
    this.apiService.getMessages().subscribe(
      res => {
        setTimeout( () => {
          this.messages = res.messages;
          this.sharedService.LOADING =  false;
          console.log(res);
          this.sharedService.openSnackBar('Successful', 'Ok', 3000, 'bg-success');
          }, 3000)
      },
      err => {
        setTimeout( () => {
          console.log(err)
          this.sharedService.LOADING =  false;
          this.sharedService.openSnackBar(err.error.message ? err.error.message : 'Oops..!! Something is not right.. please try later', 'OK', 9000, 'bg-danger')
          }, 3000)
      })
  }
  

  ngOnInit(): void {
    this.getMessages();


  }

}
