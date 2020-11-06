import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }



  // addUtility(){
  //   let dialogRef = this.dialog.open(UtilitiesComponent, {
  //     minWidth: '500px',
  //     height: '100%',
  //     disableClose: true,
  //     position: { top: '0px', right: '0px', bottom: '0px' },
  //     panelClass: ['animated','fadeInRight', 'faster', 'rounded-none', ''],
  //   });
  
  //   dialogRef.afterClosed().subscribe(userType =>{
  //    if(userType){ 
  //      alert('We got it')
  //    }
  //   });
  // }

  ngOnInit(): void {
  }




}
