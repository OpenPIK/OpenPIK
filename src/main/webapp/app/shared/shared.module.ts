import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PortfolioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PortfolioSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PortfolioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioSharedModule {
  static forRoot() {
    return {
      ngModule: PortfolioSharedModule
    };
  }
}
