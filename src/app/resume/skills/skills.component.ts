import { Component, HostBinding } from '@angular/core';

interface Skills {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @HostBinding('class') class = 'h-screen w-screen overflow-x-hidden';

  focusSkills: Skills[] = [
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Typescript', icon: 'typescript' },
    { name: 'Angular', icon: 'angular' },
    { name: 'RxJs', icon: 'rxjs' },
    { name: 'HTML 5', icon: 'html' },
    { name: 'CSS 3', icon: 'css' },
    { name: 'npm', icon: 'npm' },
    { name: 'Git', icon: 'git' },
    { name: 'Tailwin', icon: 'tailwind' },
  ];

  planToLearn = [
    { name: 'React', icon: 'react' },
    { name: 'NodeJs', icon: 'node' },
    {
      name: 'Algorithm & Data Structure',
      image: 'assets/icons/leetcode.png',
    },
  ];
}
