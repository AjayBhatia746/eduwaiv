import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path: "",component: FirstComponent},
{path:"info",component: MainComponent},
{path:"academic",component: SecondComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
