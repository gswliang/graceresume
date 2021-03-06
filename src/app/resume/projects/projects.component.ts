import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @HostBinding('class') class =
    'h-screen w-screen overflow-x-hidden pb-8 pt-16 md:pt-8';

  imageIsLoading$ = new BehaviorSubject<boolean>(true);
  imageElement!: HTMLImageElement;
  imageClass = 'w-full h-52 rounded-t-lg';

  projects = [
    {
      name: 'Resume - English Version',
      image: 'assets/project-images/resume-eng.png',
      description:
        "This project is implemented with Angular 13 and TailwindCSS, an English version of Grace's resume.",
      url: 'https://grace-resume.netlify.app/',
    },
    {
      name: 'Resume - Mandarin Version',
      image: 'assets/project-images/resume-cht.png',
      description:
        "The resume is implemented with React and plain CSS, it's a Mandarin version of Grace's resume.",
      url: 'https://graceresume.netlify.app/',
    },
    {
      name: 'Video Search',
      image: 'assets/project-images/video.png',
      description:
        'This project was intend to practice Youtube api and display the returned results in Youtube style.',
      url: 'https://videosearchgrace.netlify.app/',
    },
    {
      name: 'The Weather App',
      image: 'assets/project-images/weather.png',
      description:
        "It's the practice of weather api call with Axios to get weather information on different city.",
      url: 'https://weatherarduii.netlify.app/',
    },
    {
      name: 'BitcoEx',
      image: 'assets/project-images/bitco.png',
      description:
        'This project was implements by React without any logics, the purpose of this project is to practice my CSS and RWD skills.',
      url: 'https://bitcoex.netlify.app/',
    },
    {
      name: 'Planning App',
      image: 'assets/project-images/appforfun.png',
      description:
        'This was my first Angular app, I was practicing different component communication through the service which act as a store and updating the state on each changes.',
      url: 'https://appforfun.netlify.app/',
    },
    {
      name: 'The Navi Bar',
      image: 'assets/project-images/navibar.png',
      description:
        'This project was my very first React project, I was practicing the api call (Axios) and the debounce handling when continuously typing happens.',
      url: 'https://navibar.netlify.app/',
    },
  ];

  onClick(url: string) {
    if (!url) {
      return;
    }

    window.open(url);
  }
}
