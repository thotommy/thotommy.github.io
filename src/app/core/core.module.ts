import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],
  declarations: [],
  exports: [],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
