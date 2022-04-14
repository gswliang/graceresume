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

  focusOn = [
    {
      point: 'Currently work with Angular,Typescript,RxJS in daily basis.',
    },
    {
      point:
        'I work with CSS/SCSS at work and TailwindCSS for my own projects.',
    },
    {
      point:
        'Learning to combine Angular Material and TaiwindCSS with better approaches.',
    },

    {
      point:
        'Building a handy and customizable image magnifier component with npm.',
    },
  ];

  plansDescription = [
    {
      plan: 'I used to practice with React, I am planning to have more project on React lately.',
    },
    {
      plan: 'Building restapi and databases will makes my projects more flexible, plan to learn some backend knowledges.',
    },
    {
      plan: 'Keep practicing algorithms by doing some leetcode during my free hours.',
    },
    {
      plan: 'Study system design and get code clean',
    },
  ];
}
