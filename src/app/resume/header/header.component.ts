import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { fromEvent, pluck } from 'rxjs';
import { ResumeServiceService } from '../serivce/resume-service.service';

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
  isImgLoad = false;
  constructor(private readonly resumeService: ResumeServiceService) {}

  ngAfterViewInit() {
    this.imageTemp = this.myImg?.nativeElement;
    this.handleImageInit();
  }
  handleImageInit() {
    fromEvent(this.imageTemp, 'load').subscribe(() => (this.isImgLoad = true));
  }
}
