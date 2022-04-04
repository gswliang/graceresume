import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  @HostBinding('class') class = 'h-full w-full font-sans';

  constructor() {}

  ngOnInit(): void {}
}
