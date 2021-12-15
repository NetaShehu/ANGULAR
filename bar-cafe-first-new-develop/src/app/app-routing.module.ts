import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailsTeNgrohtaComponent} from "./details-te-ngrohta/details-te-ngrohta.component";
import {DetailsTeFtohtaComponent} from "./details-te-ftohta/details-te-ftohta.component";
import {DetailsTeTjeraComponent} from "./details-te-tjera/details-te-tjera.component";



 const routes: Routes = [
   {path: "", redirectTo: '', pathMatch: "full"},
   {path: "details-te-ngrohta" , component: DetailsTeNgrohtaComponent},
  {path: "details-te-ftohta" , component: DetailsTeFtohtaComponent},
  {path: "details-te-tjera" , component: DetailsTeTjeraComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

