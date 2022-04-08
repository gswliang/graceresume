import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @HostBinding('class') class = 'h-screen w-screen overflow-x-hidden';

  focusSkills = [
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Typescript', icon: 'typescript' },
    { name: 'Angular', icon: 'angular' },
    { name: 'RxJs', icon: 'rxjs' },
    { name: 'HTML 5', icon: 'html' },
    { name: 'CSS 3', icon: 'css' },
    { name: 'npm', icon: 'npm' },
    { name: 'Git', icon: 'git' },

    { name: 'NodeJs', icon: 'node' },
  ];

  usedToworkWith = [{ name: 'React', icon: 'react' }];
}
