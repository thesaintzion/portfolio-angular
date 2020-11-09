import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', redirectTo: '/',  pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contacts', component: ContactsComponent },
  {path: 'skills', component: SkillsComponent },
  {path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
