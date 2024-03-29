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
  @HostBinding('class') class =
    'h-screen w-screen overflow-x-hidden pt-14 md:pt-2';

  focusSkills: Skills[] = [
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Typescript', icon: 'typescript' },
    { name: 'Angular', icon: 'angular' },
    { name: 'RxJs', icon: 'rxjs' },
    { name: 'Vue', icon: 'vue' },
    { name: 'Storybook', icon: 'storybook-full' },
    { name: 'npm', icon: 'npm' },
    { name: 'Git', icon: 'git' },
    { name: 'TailwinCSS', icon: 'tailwind' },
  ];

  planToLearn = [
    { name: 'React', icon: 'react' },
    { name: 'NodeJs', icon: 'node' },
    {
      name: 'Leetcode',
      image: 'assets/icons/leetcode.png',
    },
    {
      name: 'CI/CD',
      image: 'assets/icons/cicd.png',
    },
    {
      name: 'WebPack',
      image: 'assets/icons/webpack.png',
    },
  ];

  focusOn = [
    {
      point:
        'I am available with Angular and Vue framework for web development.',
    },
    {
      point:
        'I work with plain CSS/SCSS/Less at work; TailwindCSS for my own projects.',
    },
    {
      point:
        'Always keep myself updated with frontend skills, although there are tons of techs out there.',
    },
  ];

  plansDescription = [
    {
      plan: 'I used to learned/practice with React, I am planning to have more project on React lately.',
    },
    {
      plan: 'Building restapi and databases will makes my projects more flexible, plan to learn some backend skills.',
    },
    {
      plan: 'Practicing algorithms and data structures during my free time.',
    },
    {
      plan: 'Doing some researches of web performance, webpack, CI/CD ...etc.',
    },
  ];
}
