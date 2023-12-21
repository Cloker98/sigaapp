import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatriculaDetailPage } from "./matricula-detail";

const routes: Routes = [
  {
    path: "",
    component: MatriculaDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaDetailPageRoutingModule {}
