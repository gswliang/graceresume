import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { pluck } from 'rxjs';
import { ResumeServiceService } from '../serivce/resume-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') class = 'h-screen mt-14';

  aboutMe$ = this.resumeService.myDetails$.pipe(pluck('about'));
  withIcon$ = this.resumeService.myDetails$.pipe(pluck('icon'));
  withImages$ = this.resumeService.myDetails$.pipe(pluck('image'));
  constructor(private readonly resumeService: ResumeServiceService) {}

  ngOnInit(): void {}
}
