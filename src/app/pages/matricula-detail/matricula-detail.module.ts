import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { MatriculaDetailPage } from "./matricula-detail";
import { MatriculaDetailPageRoutingModule } from "./matricula-detail-routing.module";

@NgModule({
  imports: [CommonModule, IonicModule, MatriculaDetailPageRoutingModule],
  declarations: [MatriculaDetailPage],
})
export class MatriculaDetailModule {}
