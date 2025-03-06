import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SimbolosPageRoutingModule } from './simbolos-routing.module';

import { SimbolosPage } from './simbolos.page';

const routes: Routes = [
  {
    path: '',
    component: SimbolosPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimbolosPageRoutingModule
  ],
  declarations: [SimbolosPage]
})
export class SimbolosPageModule {}
