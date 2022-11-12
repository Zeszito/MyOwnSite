import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxParentComponent } from './max-parent/max-parent.component';


const routes: Routes = [
  {path:'', component: MaxParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
