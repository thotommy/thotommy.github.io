import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AnimatedTilesComponent } from './components/animated-tiles/animated-tiles.component';
import { AnimateModule } from './animate/animate.module';

@NgModule({
  declarations: [AnimatedTilesComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, AnimateModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, AnimatedTilesComponent, AnimateModule],
})
export class SharedModule {}
