import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { isMutant } from '../app/pipes/isMutant.pipe';


import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { HomeComponent } from './components/home/home.component';
import { MutantsComponent } from './components/mutants/mutants.component';
import { NomutantsComponent } from './components/nomutants/nomutants.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HomeComponent,
    isMutant,
    MutantsComponent,
    NomutantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
