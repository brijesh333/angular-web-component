import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ButtonComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    // const buttonEmelent = createCustomElement(ButtonComponent, { injector: this.injector });
    // buttonEmelent.define('app-button', customElement);
    const el: any = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('el-button', el);
  }
}
