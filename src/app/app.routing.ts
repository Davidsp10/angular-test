//Importar los módulos del Router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component1Component} from './components/component1/component1.component';
import { HomeComponent } from './components/home/home.component';
import { MutantsComponent } from './components/mutants/mutants.component';
import { NomutantsComponent } from './components/nomutants/nomutants.component'

const appRoutes : Routes = [
    { path: '', component: Component1Component },
    { path: 'login', component: Component1Component },
    { path: 'home/:userId', component: HomeComponent },
    { path: 'home/mutants/:userId', component: MutantsComponent},
    { path: 'home/nomutants/:userId', component: NomutantsComponent }
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 