import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StuffComponent } from './stuff/stuff.component';
import { ThingsComponent } from './things/things.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'stuff', component: StuffComponent },
  { path: 'things', component: ThingsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
