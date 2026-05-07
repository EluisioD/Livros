import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheLivroPage } from './detalhe-livro.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheLivroPageRoutingModule {}
