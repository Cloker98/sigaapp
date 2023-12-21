import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserOptions } from '../interfaces/user-options';
import { Aluno } from '../interfaces/aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoData {
  alunos : Aluno[] = [];

  constructor(
    public storage: Storage
  ) { 
    let alunos : Aluno[] = [
      {
        "matricula": "180004747",
        "nome": "RICARDO STACIARINI PUTTINI",
        "ira": 4.2,
        "status": "ativo",
        "curriculo": "6351/2",
        "periodoIngresso": {
          "ano": 2018,
          "numero": 1
        },
        "curso": {
          "codigo": "6351",
          "nome": "ENGENHARIA DE REDES DE COMUNICAÇÃO"
        }
      },
      {
        "matricula": "180001234",
        "nome": "JOÃO DA SILVA",
        "ira": 4.2,
        "status": "ativo",
        "curriculo": "6351/2",
        "periodoIngresso": {
          "ano": 2018,
          "numero": 1
        },
        "curso": {
          "codigo": "6351",
          "nome": "ENGENHARIA DE REDES DE COMUNICAÇÃO"
        }
      },
    ];
    
    for(let aluno of alunos) {
      this.alunos.push(aluno);
    }
  }

  detail(matricula: string) {
    for(let aluno of this.alunos) {
      if(aluno.matricula == matricula) {
        return aluno;
      }
    }
    return null;
  }

 getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

}
