import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

// Components
import { UserSearchComponent } from './user-search/user-search.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [AppComponent, UserSearchComponent, UserHomeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
