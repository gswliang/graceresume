import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './sidenav/side-nav/side-nav.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationAndExperienceComponent } from './education-and-experience/education-and-experience.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    ResumeComponent,
    HeaderComponent,
    SideNavComponent,
    SkillsComponent,
    EducationAndExperienceComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, MatIconModule, HttpClientModule],
  exports: [HeaderComponent, SideNavComponent, EducationAndExperienceComponent],
})
export class ResumeModule {}
