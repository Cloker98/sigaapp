import { Component, OnInit } from '@angular/core';
import { DisciplinaData } from '../../providers/disciplina-data';
import { Disciplina } from '../../interfaces/disciplina';

@Component({
  selector: 'app-lista-oferta',
  templateUrl: './lista-oferta.page.html',
  styleUrls: ['./lista-oferta.page.scss'],
})
export class ListaOfertaPage implements OnInit {

  disciplinas: Disciplina[] = [];
  
  constructor(public disciplinaData: DisciplinaData,) { }

  ngOnInit() {
  }

  /**
   * Perform a service for the proper items.
   */
  getDisciplinas(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.disciplinas = [];
      return;
    }
    this.disciplinas = this.disciplinaData.query({
      nome: val,
      codigo: val
    });
  }
}
