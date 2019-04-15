import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { MeterManagementComponent } from './meter-management/meter-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
{path: '', redirectTo: "/dashboard", pathMatch: 'full'},
{path: 'asset-management', component: AssetManagementComponent},
{path: 'meter-management', component: MeterManagementComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'heroes', component: HeroesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AssetManagementComponent, MeterManagementComponent,DashboardComponent, HeroesComponent
]
