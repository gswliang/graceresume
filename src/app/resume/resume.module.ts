import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent],
  imports: [CommonModule, ResumeRoutingModule, MatIconModule],
  exports: [HeaderComponent],
})
export class ResumeModule {}
