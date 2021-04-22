import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PnfComponent } from './pnf/pnf.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ProductsComponent,
    InternshipComponent,
    ContactusComponent,
    GalleryComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Title,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
