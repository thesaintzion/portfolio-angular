import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { ViewProjectComponent } from './_dialogs/view-project/view-project.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { LoadingComponent } from './_dialogs/loading/loading.component';


@NgModule({
  declarations: [ProjectsComponent, ContactsComponent, SkillsComponent, ViewProjectComponent, LoadingComponent],
  imports: [
    SharedModule,
    CommonModule,
    PageRoutingModule,
    
  ],
  entryComponents: [ViewProjectComponent, LoadingComponent]
})
export class PageModule { }
