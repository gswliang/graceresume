import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent implements OnInit {
  @HostBinding('class') class = 'h-full w-full absolute bg-gray-200 opacity-80';

  constructor() {}

  ngOnInit(): void {}
}
