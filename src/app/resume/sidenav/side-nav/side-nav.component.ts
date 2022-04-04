import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface SideNav {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  sideNav: SideNav[] = [
    { icon: 'perm_identity', name: 'About me' },
    {
      icon: 'build',
      name: 'Skills',
    },
    {
      icon: 'settings_accessibility',
      name: 'Experience',
    },
    {
      icon: 'category',
      name: 'Projects',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
