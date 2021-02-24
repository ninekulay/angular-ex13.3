import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from'./home/home.component';
import { NavbarComponent } from'./navbar/navbar.component';
import { SearchBarComponent } from'./searchbar/searchbar.component';
import { TopBannerComponent } from'./topbanner/topbanner.component';
import { FormsModule } from'@angular/forms';
import { HeaderComponent } from'./header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    TopBannerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
