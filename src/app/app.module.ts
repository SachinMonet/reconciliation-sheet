import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReconcilTablrComponent } from './component/reconcil-tablr/reconcil-tablr.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { PanelcostComponent } from './component/panelcost/panelcost.component';
import { RecontableComponent } from './component/recontable/recontable.component';
import { NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    ReconcilTablrComponent,
    NavbarComponent,
    PanelcostComponent,
    RecontableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    NgOptimizedImage,
    MatSnackBarModule,
    MatProgressSpinnerModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
