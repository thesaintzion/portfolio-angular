import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  // {path: '', redirectTo: '/',  pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contacts', component: ContactsComponent },
  
  // {path: 'about', redirectTo: '/', pathMatch: 'full'},
  // {path: 'projects', component: ProjectsComponent},
  // {path: 'contacts', component:  ContactsComponent},
  // {path: 'skills', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
