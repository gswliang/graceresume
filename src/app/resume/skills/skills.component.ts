import { Component, HostBinding, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.focusSkills = this.focusSkills.map((skill) => {
      return { ...skill, iconReg: this.registerSVGIcon(skill.icon) };
    });
  }

  registerSVGIcon(icon: string) {
    const iconUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `assets/icons/${icon}.svg`
    );

    return this.matIconRegistry.addSvgIcon(icon, iconUrl);
  }
}
