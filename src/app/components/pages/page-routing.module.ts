import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  // {path: '', redirectTo: '/',  pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contacts', component: ContactsComponent },
  {path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
