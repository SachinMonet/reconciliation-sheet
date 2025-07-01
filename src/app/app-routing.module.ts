import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReconcilTablrComponent } from './component/reconcil-tablr/reconcil-tablr.component';
import { PanelcostComponent } from './component/panelcost/panelcost.component';
import { RecontableComponent } from './component/recontable/recontable.component';

const routes: Routes = [
  {
    path: '',
    component: ReconcilTablrComponent
  },
  {path: "panelcost",
    component: PanelcostComponent
  },
  {path: "test",
    component: RecontableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
