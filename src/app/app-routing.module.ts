import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReconcilTablrComponent } from './component/reconcil-tablr/reconcil-tablr.component';
import { PanelcostComponent } from './component/panelcost/panelcost.component';
import { RecontableComponent } from './component/recontable/recontable.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './authguard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component:ReconcilTablrComponent,
    canActivate:[AuthGuard]

  },
  {
    path: "panelcost",
    component: PanelcostComponent,
     canActivate:[AuthGuard]
  },
  {
    path: "test",
    component: RecontableComponent,
     canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
