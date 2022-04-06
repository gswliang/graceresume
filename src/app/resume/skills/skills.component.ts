import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @HostBinding('class') class = 'h-screen';

  constructor() {}

  ngOnInit(): void {}
}
