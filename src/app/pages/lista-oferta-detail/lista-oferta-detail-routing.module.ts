import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListaOfertaDetailPage } from "./lista-oferta-detail.page";

const routes: Routes = [
  {
    path: "",
    component: ListaOfertaDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaOfertaDetailPageRoutingModule {}
