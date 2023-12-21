import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserOptions } from '../interfaces/user-options';
import { Aluno } from '../interfaces/aluno';
import { Matricula } from '../interfaces/matricula';


@Injectable({
  providedIn: 'root'
})
export class MatriculaData {
  matriculas : Matricula[] = [];

  constructor(
    public storage: Storage
  ) { 
    let matriculas : Matricula[] = [
      {
        "id": "ENE0022-A",
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0022",
            "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "inicio": "16:00", 
            "fim" : "17:50"
          }, {
            "dia" : "QUI",
            "inicio": "16:00", 
            "fim" : "17:50"
          }  ]
        }
      },
      {
        "id": "ENE0056-A",
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0056",
            "nome" : "SISTEMAS MICROPROCESSADOS"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "SEG",
            "inicio": "10:00", 
            "fim" : "11:50"
          }, {
            "dia" : "QUA",
            "inicio": "10:00", 
            "fim" : "11:50"
          } ]
        }
      },
      {
        "id": "ENE0058-A",
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0058",
            "nome" : "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "SEG",
            "inicio": "14:00", 
            "fim" : "15:50"
          } ]
        }
      },
      {
        "id": "ENE0067-A",
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0067",
            "nome" : "SINAIS E SISTEMAS EM TEMPO CONTÍNUO"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "inicio": "14:00", 
            "fim" : "15:50"
          }, {
            "dia" : "QUI",
            "inicio": "14:00", 
            "fim" : "15:50"
          } ]
        }
      },
      {
        "id": "ENE0274-A",
        "status" : "PreMatricula",
        "turma" : {
          "codigo" : "A",
          "disciplina" : {
            "codigo" : "ENE0274",
            "nome" : "FUNDAMENTOS DE REDES"
          },
          "vagasOfertadas" : 10,
          "vagasOcupadas" : 0,
          "horario" : [ {
            "dia" : "TER",
            "inicio": "10:00", 
            "fim" : "11:50"
          }, {
            "dia" : "QUI",
            "inicio": "10:00", 
            "fim" : "11:50"
          } ]
        }
      }
    ];
   
    for(let matricula of matriculas) {
      this.matriculas.push(matricula);
    }
  }

  detail(id: string) {
    for(let matricula of this.matriculas) {
      if(matricula.id == id) {
        return matricula;
      }
    }
    return null;
  }

search(params?: any) {
  if (!params) {
    return this.matriculas;
  }

  return this.matriculas.filter((matricula) => {
    for (let key in params) {
      let field = matricula[key];
      if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
        return matricula;
      } else if (field == params[key]) {
        return matricula;
      }
    }
    return null;
  });
}

add(matricula: Matricula) {
 matricula.id = matricula.turma.disciplina.codigo+'-'+matricula.turma.codigo;
 this.matriculas.push(matricula);
}

alterarStatus(id: string, status: string) {
  for(let matricula of this.matriculas) {
    if(matricula.id == id) {
      matricula.status = status;
    }
  }

}

 getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

}
