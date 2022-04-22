import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationAndExperienceComponent } from './education-and-experience/education-and-experience.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      { path: '', component: HeaderComponent },
      { path: 'about', component: HeaderComponent },
      { path: 'skillsPlan', component: SkillsComponent },
      {
        path: 'education&experience',
        component: EducationAndExperienceComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
