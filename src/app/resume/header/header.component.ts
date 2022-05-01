import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, fromEvent, pluck } from 'rxjs';
import { ResumeServiceService } from '../serivce/resume-service.service';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  @HostBinding('class') class = 'screen';
  @ViewChild('myImg') myImg!: ElementRef;
  imageTemp!: HTMLImageElement;

  aboutMe$ = this.resumeService.myDetails$.pipe(pluck('about'));
  withIcon$ = this.resumeService.myDetails$.pipe(pluck('icon'));
  withImages$ = this.resumeService.myDetails$.pipe(pluck('image'));
  isImageLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private readonly resumeService: ResumeServiceService) {}

  ngAfterViewInit() {
    this.imageTemp = this.myImg?.nativeElement;
    this.handleImageInit();
  }
  handleImageInit() {
    fromEvent(this.imageTemp, 'load')
      .pipe(untilDestroyed(this))
      .subscribe(() => this.isImageLoading$.next(false));
  }
}
