import { Component, OnInit, ViewChild } from '@angular/core';
import { MatriculaData } from '../../providers/matricula-data';
import { IonList } from '@ionic/angular';
import { Matricula } from '../../interfaces/matricula';

@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.page.html',
  styleUrls: ['./matricula-list.page.scss'],
})
export class MatriculaListPage implements OnInit {

  // Gets a reference to the list element
  @ViewChild('matriculaList', { static: true }) matriculaList: IonList;
  matriculas: Matricula[] = [];


  constructor(public matriculaData: MatriculaData,
    ) { }

  ngOnInit() {
    this.updateMatricula();
  }

  updateMatricula() {
    this.matriculas = this.matriculaData.search();
  }
}


