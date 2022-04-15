import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationAndExperienceComponent implements OnInit {
  @HostBinding('class') class = 'h-screen w-screen overflow-x-hidden';

  constructor() {}

  ngOnInit(): void {}

  education = [
    {
      year: '1999 - 2004',
      insititute: 'Willowridge High School',
      major: 'High School',
      logo: 'assets/willowridge.png',
    },
    {
      year: '2017 - 2021',
      insititute: 'National Chi-Nan University',
      major: 'Bachelor of Computer Science and Information Engineering',
      logo: 'assets/ncnu.png',
    },
  ];
}
