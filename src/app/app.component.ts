import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "Grace's Resume";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    const path = 'assets/icons/';
    const suffix = '.svg';
    this.matIconRegistry.addSvgIconResolver((name) =>
      domSanitizer.bypassSecurityTrustResourceUrl(`${path}${name}${suffix}`)
    );
  }
}
