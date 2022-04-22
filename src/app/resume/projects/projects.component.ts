import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @HostBinding('class') class =
    'h-screen w-screen overflow-x-hidden py-8 pt-14 md:pt-1';

  projects = [
    {
      name: 'My Resume - English',
      image: 'assets/project-images/resume-eng.png',
      description:
        'This project is implemented with Angular 13 and TailwindCSS; this is an English version resume.',
      url: 'https://grace-resume.netlify.app/',
    },
    {
      name: 'My Resume - Mandarin',
      image: 'assets/project-images/resume-cht.png',
      description:
        'This resume is implemented with React and plain CSS; a Mandarin version resume.',
      url: 'https://graceresume.netlify.app/',
    },
    {
      name: 'Video Search',
      image: 'assets/project-images/video.png',
      description:
        'This project was intend to practicing google youtube api call and display the videos in Youtube style.',
      url: 'https://videosearchgrace.netlify.app/',
    },
    {
      name: 'The Weather App',
      image: 'assets/project-images/weather.png',
      description:
        'Practicing weather api call with Axios to get weather information on different city.',
      url: 'https://weatherarduii.netlify.app/',
    },
    {
      name: 'The Navi Bar',
      image: 'assets/project-images/navibar.png',
      description:
        'This project is my very first React project of practicing Google / Wikipedia api call (Axios) and the debounce handling while continues typing happens.',
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
