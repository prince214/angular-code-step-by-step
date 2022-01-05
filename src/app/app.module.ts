import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { StyleTestComponent } from './Components/style-test/style-test.component';
import { StyleTestv2Component } from './Components/style-testv2/style-testv2.component';
import { StyleTestv3Component } from './Components/style-testv3/style-testv3.component';

//Modules
import { UserAuthModule } from '../app/user-auth/user-auth.module';
import { StyleTestv1Component } from './Components/style-testv1/style-testv1.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    StyleTestComponent,
    StyleTestv2Component,
    StyleTestv3Component,
    StyleTestv1Component
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
