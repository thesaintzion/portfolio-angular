import { Component, OnInit } from '@angular/core';

import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-one';
  audio = false;

  constructor( public sharedService: SharedService) {
    
   }


   ngOnInit(): void {
     setTimeout( () => {
      this.audio = true;
     }, 3000)
 
       var x = document.getElementById("myAudio");
       x.click;
  }




}


