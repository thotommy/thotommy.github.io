import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AnimatedTilesComponent } from './components/animated-tiles/animated-tiles.component';

@NgModule({
  declarations: [AnimatedTilesComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, AnimatedTilesComponent],
})
export class SharedModule {}
