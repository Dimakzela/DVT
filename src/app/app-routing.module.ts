import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArtistDetailsComponent} from "./artist-details/artist-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artists/:id', component: ArtistDetailsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
