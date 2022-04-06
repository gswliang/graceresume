import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface SideNav {
  icon: string;
  name: string;
  data?: string;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  sideNav: SideNav[] = [
    { icon: 'perm_identity', name: 'About me', data: 'about' },
    {
      icon: 'build',
      name: 'Skills / Experience',
      data: 'skills',
    },
    {
      icon: 'category',
      name: 'Projects',
      data: 'projects',
    },
  ];
  openNav = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onClick(selectedPath: string | undefined) {
    if (!selectedPath) {
      return;
    }

    this.router.navigate([selectedPath], { relativeTo: this.route });
  }
}
