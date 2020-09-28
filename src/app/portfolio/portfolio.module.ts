import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [PortfolioComponent, SkillsComponent, ProjectsComponent, ContactComponent, ParallaxDirective],
  imports: [CommonModule, SharedModule, MaterialModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
