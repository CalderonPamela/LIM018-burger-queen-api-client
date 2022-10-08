import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { ChefComponent } from './view/chef/chef.component';
import { ManagedComponent } from './view/managed/managed.component';
import { WaiterComponent } from './view/waiter/waiter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChefComponent,
    ManagedComponent,
    WaiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
