import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { MatriculaData } from "../../../providers/matricula-data";
import { UserData } from "../../../providers/user-data";
import { Matricula } from "../../interfaces/matricula";

@Component({
  selector: "page-matricula-detail",
  styleUrls: ["./matricula-detail.scss"],
  templateUrl: "matricula-detail.html",
})
export class MatriculaDetailPage {
  matricula: Matricula;
  isFavorite = false;
  defaultHref = "";

  constructor(
    private matriculaData: MatriculaData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    /*
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.session.name
                );

                break;
              }
            }
          }
        }
      }
    });
*/
    const matriculaId = this.route.snapshot.paramMap.get("matriculaId");

    this.matricula = this.matriculaData.detail(matriculaId);
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/matricula-list`;
  }

  sessionClick(item: string) {
    console.log("Clicked", item);
  }

  toggleFavorite() {
    /*
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
*/
  }

  shareSession() {
    console.log("Clicked share session");
  }

  alterarStatus(status: string) {
    this.matriculaData.alterarStatus(this.matricula.id, status);
  }
}
