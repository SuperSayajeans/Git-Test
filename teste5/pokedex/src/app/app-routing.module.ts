import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaterComponent} from './water/water.component';
import {FireComponent} from './fire/fire.component';
import {GrassComponent} from './grass/grass.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PostItComponent } from './post-it/post-it.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'water', component: WaterComponent},
  {path: 'fire', component: FireComponent},
  {path: 'grass', component: GrassComponent},
  {path: 'post-it', component: PostItComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WaterComponent, FireComponent, GrassComponent, NotFoundComponent, HomeComponent];
