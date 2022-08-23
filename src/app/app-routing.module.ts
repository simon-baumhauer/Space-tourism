import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'destination', component: DestinationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
