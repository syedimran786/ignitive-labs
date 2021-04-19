import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PnfComponent } from './pnf/pnf.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home", children: [
      { path: "", component: HomeComponent },
      {path:"aboutus",component:AboutusComponent}
  ]},
  { path: "aboutus", component: AboutusComponent },
  { path: "services", component: ServicesComponent },
  { path: "products", component: ProductsComponent },
  { path: "internship", component: InternshipComponent},
  { path: "contactus", component: ContactusComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "**", component: PnfComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
