import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { ListaOfertaDetailPageRoutingModule } from "./lista-oferta-detail-routing.module";
import { ListaOfertaDetailPage } from "./lista-oferta-detail.page";

@NgModule({
  imports: [CommonModule, IonicModule, ListaOfertaDetailPageRoutingModule],
  declarations: [ListaOfertaDetailPage],
})
export class ListaOfertaDetailPageModule {}
