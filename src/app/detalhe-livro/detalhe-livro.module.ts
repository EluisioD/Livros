import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheLivroPageRoutingModule } from './detalhe-livro-routing.module';

import { DetalheLivroPage } from './detalhe-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheLivroPageRoutingModule
  ],
  declarations: [DetalheLivroPage]
})
export class DetalheLivroPageModule {}
