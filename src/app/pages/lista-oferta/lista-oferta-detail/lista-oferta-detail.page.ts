import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MatriculaData } from "../../../providers/matricula-data";
import { TurmaData } from "../../../providers/turma-data";
import { Turma } from "../../interfaces/turma";

@Component({
  selector: "app-lista-oferta",
  templateUrl: "./lista-oferta-detail.page.html",
  styleUrls: ["./lista-oferta-detail.page.scss"],
})
export class ListaOfertaDetailPage implements OnInit {
  defaultHref = "";
  turmas: Turma[] = [];
  prioridade;

  constructor(
    public turmaData: TurmaData,
    public matriculaData: MatriculaData,
    private route: ActivatedRoute,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const disciplinaId = this.route.snapshot.paramMap.get("disciplinaId");
    console.log(disciplinaId);

    this.turmas = this.turmaData.query({
      disciplina: disciplinaId,
    });
  }

  async confirmarInclusaoTurma(turma: Turma) {
    console.log(turma);
    const alert = await this.alertCtrl.create({
      header: "Prioridade",
      buttons: [
        "Cancelar",
        {
          text: "Confirmar",
          handler: (data: any) => {
            this.matriculaData.add({
              prioridade: this.prioridade,
              status: "Pedido",
              turma: turma,
            });
            //            this.getUsername();
          },
        },
      ],
      inputs: [
        {
          type: "text",
          name: "prioridade",
          value: this.prioridade,
          placeholder: "prioridade",
        },
      ],
    });
    await alert.present();
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/lista-oferta`;
  }
}
