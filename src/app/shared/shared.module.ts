import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { ParallaxDirective } from './directives/parallax.directive';
import { AnimatedTilesComponent } from './components/animated-tiles/animated-tiles.component';

@NgModule({
  declarations: [ParallaxDirective, AnimatedTilesComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, ParallaxDirective, AnimatedTilesComponent],
})
export class SharedModule {}
