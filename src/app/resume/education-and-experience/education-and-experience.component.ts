import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationAndExperienceComponent {
  @HostBinding('class') class =
    'mx-4 md:mx-20 overflow-x-hidden relative pt-14 md:pt-2';

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

  experience = [
    {
      company: 'CBX Software',
      title: 'Frontend Developer',
      time: '2021/07 ~ Present',
      place: 'Taipei, Taiwan',
      description:
        'Maintain and building new features of a Product Life Management Software, assit the frontend teams to build different re-useable and scalable components based on complex structures.',
    },
    {
      company: 'Plainliv Company limited Co. Ltd.',
      title: 'Intern Embedded Software Engineer',
      time: '2020/04 ~ 2021/02',
      place: 'Taichung, Taiwan',
      description:
        'Using Nordic nRF 51822 with the sensor to detect the water quality, daily usages, electricity volts...etcs, calculated the results, work with nRF connect, sending datas from nRF 51822 (MCU) through bluetooth to cellphone APP.',
    },
    {
      company: 'Sancardia Liquor Store',
      title: 'Shop owner',
      time: '2014/11 ~ 2017/05',
      place: 'Pretoria, South Africa',
      description: '',
    },
    {
      company: 'Repo Wild 15 (pty) Ltd',
      title: 'Sales Manager',
      time: '2004/03 ~ 2014/06',
      place: 'Pretoria, South Africa',
      description: '',
    },
  ];
}
