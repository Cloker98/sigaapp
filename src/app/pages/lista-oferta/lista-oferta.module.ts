import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { ListaOfertaPageRoutingModule } from "./lista-oferta-routing.module";
import { ListaOfertaPage } from "./lista-oferta.page";

@NgModule({
  imports: [CommonModule, IonicModule, ListaOfertaPageRoutingModule],
  declarations: [ListaOfertaPage],
})
export class ListaOfertaPageModule {}
