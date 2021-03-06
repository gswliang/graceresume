import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { BehaviorSubject, pluck } from 'rxjs';
import { ResumeServiceService } from '../serivce/resume-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @HostBinding('class') class = 'screen';

  imageSrc = '/assets/grace.jpeg';
  imageClass = 'flex-none rounded-full h-36 w-36 pt-3 md:h-44 md:w-44';
  aboutMe$ = this.resumeService.myDetails$.pipe(pluck('about'));
  withIcon$ = this.resumeService.myDetails$.pipe(pluck('icon'));
  withImages$ = this.resumeService.myDetails$.pipe(pluck('image'));
  isImageLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private readonly resumeService: ResumeServiceService) {}
}
