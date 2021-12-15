import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {CdkTreeModule} from "@angular/cdk/tree";
import { DetailsTeNgrohtaComponent } from './details-te-ngrohta/details-te-ngrohta.component';
import { DetailsTeFtohtaComponent } from './details-te-ftohta/details-te-ftohta.component';
import { DetailsTeTjeraComponent } from './details-te-tjera/details-te-tjera.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TypeService} from "./type.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    DetailsTeNgrohtaComponent,
    DetailsTeFtohtaComponent,
    DetailsTeTjeraComponent,
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatListModule,
    CdkTreeModule,
    HttpClientModule

  ],
  providers: [TypeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

