import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, fromEvent } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit {
  @Output() clickOutside = new EventEmitter<void>();
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    fromEvent(this.document, 'click')
      .pipe(
        filter((event) => !this.isInside(event.target as HTMLElement)),
        untilDestroyed(this)
      )
      .subscribe(() => this.clickOutside.emit());
  }

  isInside(event: HTMLElement): boolean {
    return (
      event === this.element.nativeElement ||
      this.element.nativeElement.contains(event)
    );
  }
}
