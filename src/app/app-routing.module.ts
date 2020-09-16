import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NewComponent } from '../app/components/new/new.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'nuevo', component: NewComponent},
  { path: '**', pathMatch: 'full', redirectTo : 'home' } 
];


/*const APP_ROUTES : Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'provincias' , component: ProvinciasComponent }, 
  { path: 'prevision/:id' , component: PrevisionComponent },  
  { path: '**', pathMatch: 'full', redirectTo : 'home' }

]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
