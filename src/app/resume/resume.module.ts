import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './sidenav/side-nav/side-nav.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent, SideNavComponent, SkillsComponent],
  imports: [CommonModule, ResumeRoutingModule, MatIconModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class ResumeModule {}
