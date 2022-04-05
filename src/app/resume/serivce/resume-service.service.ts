import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Detail {
  name: string;
  icon?: string;
  data: string;
  image?: string;
  hasLink?: boolean;
  link?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ResumeServiceService {
  aboutMe =
    'I am a junior front-end developer with one year of experience, currently working with Typescript, HTML/CSS, passion about learning and buiding delightful and scalable web applications, fascinated of learning new knowledges to imporve my technical skills.';

  withIcon: Detail[] = [
    {
      name: 'Email',
      icon: 'email',
      data: 'gswliang@gmail.com',
      link: 'mailto:gswliang@gmail.com',
      hasLink: true,
    },
    {
      name: 'Tel',
      icon: 'phone_iphone',
      data: '0968 649 865',
      link: 'tel:+886-0968-649-865',
      hasLink: true,
    },
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

  details$ = new BehaviorSubject<any>({
    icon: this.withIcon,
    image: this.withImages,
    about: this.aboutMe,
  });

  myDetails$ = this.details$.asObservable();

  constructor() {}
}
