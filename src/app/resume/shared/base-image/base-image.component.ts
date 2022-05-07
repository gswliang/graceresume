import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, fromEvent } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-base-image',
  templateUrl: './base-image.component.html',
  styleUrls: ['./base-image.component.scss'],
})
export class BaseImageComponent implements AfterViewInit {
  @Input() imageSrc: string;
  @Input() imageName: string;
  @Input() imageClass: string;
  @ViewChild('baseImage') baseImage: ElementRef;

  imageTemp: HTMLImageElement;
  isImageLoading$ = new BehaviorSubject<boolean>(true);

  ngAfterViewInit() {
    this.imageTemp = this.baseImage?.nativeElement;
    this.handleImageInit();
  }

  handleImageInit() {
    fromEvent(this.imageTemp, 'load')
      .pipe(untilDestroyed(this))
      .subscribe(() => this.isImageLoading$.next(false));
  }
}
