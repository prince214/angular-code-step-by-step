import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { StyleTestComponent } from './Components/style-test/style-test.component';
import { StyleTestv2Component } from './Components/style-testv2/style-testv2.component';
import { StyleTestv3Component } from './Components/style-testv3/style-testv3.component';
import { PostsModule } from './posts/posts.module'

//Modules
import { UserAuthModule } from '../app/user-auth/user-auth.module';
import { StyleTestv1Component } from './Components/style-testv1/style-testv1.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormModuleComponent } from './Components/form-module/form-module.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { TodoComponent } from './Components/todo/todo.component';
import { ChildComponentComponent } from './Components/child-component/child-component.component';
import { UsdToInrPipe } from './Pipes/usd-to-inr.pipe'

import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './Directives/red-el.directive';
import { AppRoutingModule } from './app-routing.module';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    StyleTestComponent,
    StyleTestv2Component,
    StyleTestv3Component,
    StyleTestv1Component,
    HeaderComponent,
    FormModuleComponent,
    TodoComponent,
    ChildComponentComponent,
    UsdToInrPipe,
    RedElDirective,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
