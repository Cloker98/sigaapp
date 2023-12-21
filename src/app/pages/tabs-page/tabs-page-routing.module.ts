import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatriculaListPage } from "../matricula-list/matricula-list.page";
import { TabsPage } from "./tabs-page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "account",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../account/account.module").then((m) => m.AccountModule),
          },
        ],
      },
      {
        path: "matricula-list",
        children: [
          {
            path: "",
            component: MatriculaListPage,
          },
          {
            path: "matricula/:matriculaId",
            loadChildren: () =>
              import(
                "../matricula-list/matricula-detail/matricula-detail.module"
              ).then((m) => m.MatriculaDetailModule),
          },
        ],
      },
      {
        path: "lista-oferta",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../lista-oferta/lista-oferta.module").then(
                (m) => m.ListaOfertaPageModule
              ),
          },
          {
            path: "disciplina/:disciplinaId",
            loadChildren: () =>
              import(
                "../lista-oferta/lista-oferta-detail/lista-oferta-detail.module"
              ).then((m) => m.ListaOfertaDetailPageModule),
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/account",
        pathMatch: "full",
      },
      /*
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
