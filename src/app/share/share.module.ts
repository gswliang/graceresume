import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [ShareComponent, LoadingIndicatorComponent],
  imports: [CommonModule, ShareRoutingModule],
  exports: [LoadingIndicatorComponent],
})
export class ShareModule {}
