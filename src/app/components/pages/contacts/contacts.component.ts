import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { LoadingComponent } from '../_dialogs/loading/loading.component';
import { ViewProjectComponent } from '../_dialogs/view-project/view-project.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup

  constructor(private dialog: MatDialog, public sharedService: SharedService, private formBuilder: FormBuilder, private apiService: ApiService ) { 
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  onFormSubmit(){
    if(this.contactForm.invalid){
      this.sharedService.openSnackBar('Please fill in all fields', 'OK', 5000, 'bg-danger')
    }else{
      this.sharedService.LOADING = true;
      let data = {
      email: this.contactForm.value.email,
      name: this.contactForm.value.name,
      message: this.contactForm.value.message,
      }
      this.apiService.sendMessage(data).subscribe(
        res => {
          setTimeout( () => {
            this.sharedService.LOADING =  false;
            console.log(res)
            this.sharedService.openSnackBar('Message sent successfully', 'OK', 9000, 'bg-success')
            this.contactForm.reset();
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
  }

  ngOnInit(): void {
  }

}
