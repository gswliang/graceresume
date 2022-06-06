import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationAndExperienceComponent {
  @HostBinding('class') class = 'screen';

  imageClass = 'w-28 h-24 md:w-40 md:h-36 px-2';
  education = [
    {
      year: '1999 - 2004',
      institute: 'Willowridge High School',
      major: 'High School',
      logo: 'assets/willowridge.png',
    },
    {
      year: '2017 - 2021',
      institute: 'National Chi-Nan University',
      major: 'Bachelor of Computer Science and Information Engineering',
      logo: 'assets/ncnu.png',
    },
  ];

  experience = [
    {
      company: 'CBX Software',
      title: 'Frontend Developer',
      duration: '2021/07 ~ Present',
      place: 'Taipei, Taiwan',
      description:
        'CBX software, the Product Life Management SaaS system provider, my main job as a junior developer is to:',
      items: [
        'Maintain and improve the current system',
        'UI adjustment',
        'Discuss with backend member for the structure of REST api',
        'New features implementation (such as image magnifier, QRcode scanner, indexedDB...etc)',
        'Legacy code refactor',
      ],
    },

    {
      company: 'Plainliv Company limited Co. Ltd.',
      title: 'Intern Embedded Software Engineer',
      duration: '2020/04 ~ 2021/02',
      place: 'Taichung, Taiwan',
      description:
        'Using Nordic nRF 51822 with the sensor to detect the water quality, daily usages, electricity volts...etc, calculated the results, work with nRF connect, sending datas from nRF 51822 (MCU) through bluetooth to cellphone APP.',
    },
    {
      company: 'Sancardia Liquor Store',
      title: 'Shop owner',
      duration: '2014/11 ~ 2017/05',
      place: 'Pretoria, South Africa',
      description: '',
    },
    {
      company: 'Repo Wild 15 (pty) Ltd',
      title: 'Sales Manager',
      duration: '2004/03 ~ 2014/06',
      place: 'Pretoria, South Africa',
      description: '',
    },
  ];
}
