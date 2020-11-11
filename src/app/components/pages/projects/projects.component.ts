import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { ViewProjectComponent } from '../_dialogs/view-project/view-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects = [
    {
      name: 'Foan Realties Ltd',
      description: 'Real estate management portal',
      link: 'http://www.foanrealties.com',
      img: 'assets/img/foan.png',
      role: 'FrontEnd',
    },
    {
      name: 'Tech Academy Ltd',
      description: 'School management portal',
      link: 'http://tech-academy-app.herokuapp.com',
      img: 'assets/img/tech-academy.png',
      role: 'FrontEnd'
    },
    {
      name: 'COVID-19 Live Update',
      description: 'Information website',
      link: 'https://covid-19-live-update.herokuapp.com',
      img: 'assets/img/covid-19.png',
      role: 'FullStack'
    },
    {
      name: 'Speed Mobile App',
      description: 'Online competition app',
      link: 'https://play.google.com/store/apps/details?id=com.dave.speed',
      img: 'assets/img/speed-app.png',
      role: 'BankEnd'
    },
    {
      name: 'Fiturl',
      description: 'Url shortener & Page builder',
      link: ' http://fiturl.xyz',
      img: 'assets/img/fiturl.png',
      role: 'Modified'
    },
   
    {
      name: 'Aimart Realtors Ltd',
      description: 'Real estate management portal',
      link: 'http://aimart.herokuapp.com',
      img: 'assets/img/aimart.png',
      role: 'FullStack'
    },
    {
      name: 'My Profile',
      description: 'Portfolio website',
      link: '',
      img: 'assets/img/screenshot.png',
      role: 'FullStack'
    }

  ]

  constructor(private dialog: MatDialog, public sharedService: SharedService) { }



  viewProject(name, description, link, img){
    let dialogRef = this.dialog.open(ViewProjectComponent, {
      width: this.sharedService.isHandset? '100%' : '400px',
      height: '100%',
      data: {
        name,
        description,
        link, 
        img
      },
      // disableClose: true,
      position: { top: '0px', right: '0px', bottom: '0px' },
      panelClass: ['animated','fadeInRight', 'faster', 'dialog-rounded-none', 'dialog-transparent-bg'],
    });
  
    dialogRef.afterClosed().subscribe(userType =>{
     if(userType){ 
      //  alert('We got it')
     }
    });
  }

  ngOnInit(): void {
    this.sharedService.initBreakPoint();
  }




}
