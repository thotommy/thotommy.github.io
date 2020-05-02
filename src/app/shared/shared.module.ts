import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [ParallaxDirective],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule],
})
export class SharedModule {}
