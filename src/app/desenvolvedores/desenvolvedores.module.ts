import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { DesenvolvedoresPageRoutingModule } from './desenvolvedores-routing.module';

import { DesenvolvedoresPage } from './desenvolvedores.page';

const routes: Routes = [
  {
    path: '',
    component: DesenvolvedoresPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesenvolvedoresPageRoutingModule
  ],
  declarations: [DesenvolvedoresPage]
})
export class DesenvolvedoresPageModule {}
