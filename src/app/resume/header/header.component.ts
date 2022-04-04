import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

interface Detail {
  name: string;
  icon?: string;
  data: string;
  image?: string;
  hasLink?: boolean;
  mailTo?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') class = 'h-screen';

  aboutMe =
    'I am a junior front-end developer with one year of experience, currently working with Typescript, HTML/CSS, passion about learning and buiding delightful and scalable web applications, fascinated of learning new knowledges to imporve my technical skills.';

  withIcon: Detail[] = [
    {
      name: 'Email',
      icon: 'email',
      data: 'gswliang@gmail.com',
      mailTo: 'mailto:gswliang@gmail.com',
      hasLink: true,
    },
    { name: 'Tel', icon: 'phone_iphone', data: '0968-649-865' },
    {
      name: 'Located',
      icon: 'location_on',
      data: 'New Taipei, Taiwan',
    },
    {
      name: 'Nationality',
      icon: 'public',
      data: 'South Africa, Taiwan',
    },
    {
      name: 'Languages',
      icon: 'translate',
      data: 'English , Mandrain',
    },
  ];

  withImages: Detail[] = [
    {
      name: 'Github',
      image: 'assets/icons/github.png',
      data: 'https://github.com/gswliang',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
