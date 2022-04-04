import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  aboutMe =
    'I am a junior front-end developer with one year of experience, currently working with Typescript, HTML/CSS, passion about learning and buiding delightful and scalable web applications, fascinated of learning new knowledges to imporve my technical skills.';

  constructor() {}

  ngOnInit(): void {}
}
