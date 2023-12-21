import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { MatriculaListPageRoutingModule } from "./matricula-list-routing.module";
import { MatriculaListPage } from "./matricula-list.page";

@NgModule({
  imports: [CommonModule, IonicModule, MatriculaListPageRoutingModule],
  declarations: [MatriculaListPage],
})
export class MatriculaListPageModule {}
