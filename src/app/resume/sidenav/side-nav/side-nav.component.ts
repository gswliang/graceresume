import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
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
  @HostBinding('class') class = 'z-[1]';
  sideNav: SideNav[] = [
    { icon: 'perm_identity', name: 'About me', data: 'about' },
    {
      icon: 'terminal',
      name: 'Skills / Plans',
      data: 'skillsPlan',
    },
    {
      icon: 'build',
      name: 'Experience',
      data: 'experience',
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
    this.openNav = !this.openNav;
    if (!selectedPath) {
      return;
    }

    this.router.navigate([selectedPath], { relativeTo: this.route });
  }
}
