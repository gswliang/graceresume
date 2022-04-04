import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent],
  imports: [CommonModule, ResumeRoutingModule],
  exports: [HeaderComponent],
})
export class ResumeModule {}
