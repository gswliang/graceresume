import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  @HostBinding('class') class =
    'flex flex-col md:flex-row h-full w-full font-sans';

  constructor() {}

  ngOnInit(): void {}
}
