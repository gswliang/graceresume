import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavComponent } from './sidenav/side-nav/side-nav.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationAndExperienceComponent } from './education-and-experience/education-and-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShareModule } from '../share/share.module';
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [
    ResumeComponent,
    HeaderComponent,
    SideNavComponent,
    SkillsComponent,
    EducationAndExperienceComponent,
    ProjectsComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ShareModule,
  ],
  exports: [HeaderComponent, SideNavComponent, EducationAndExperienceComponent],
})
export class ResumeModule {}
