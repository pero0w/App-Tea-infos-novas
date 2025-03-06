import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AlertaPageRoutingModule } from './alerta-routing.module';

import { AlertaPage } from './alerta.page';

const routes: Routes = [
  {
    path: '',
    component: AlertaPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaPageRoutingModule
  ],
  declarations: [AlertaPage]
})
export class AlertaPageModule {}




