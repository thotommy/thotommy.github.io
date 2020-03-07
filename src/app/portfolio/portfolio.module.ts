import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, SharedModule, MaterialModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
