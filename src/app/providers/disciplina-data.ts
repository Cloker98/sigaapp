import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserOptions } from '../interfaces/user-options';
import { Aluno } from '../interfaces/aluno';
import { Disciplina } from '../interfaces/disciplina';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaData {
  disciplinas : Disciplina[] = [];

  constructor(
    public storage: Storage
  ) { 
    let disciplinas : Disciplina[] = [
      {
        "codigo" : "ENE0026",
        "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 0,
          "extensionista": 0
        },
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0334",
        "nome" : "COMPUTACAO PARA ENGENHARIA",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "unidade" : "ENE"
      }, {
        "codigo" : "IFD0171",
        "nome" : "FISICA 1",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "unidade" : "IFD"
      }, {
        "codigo" : "IFD0173",
        "nome" : "FISICA 1 EXPERIMENTAL",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "unidade" : "IFD"
      }, {
        "codigo" : "MAT0025",
        "nome" : "CÁLCULO 1",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 60,
          "extensionista": 0
        },
        "unidade" : "MAT"
      }, {
        "codigo" : "MAT0031",
        "nome" : "INTRODUCAO A ALGEBRA LINEAR",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "unidade" : "MAT"
      }, {
        "codigo" : "ENE0013",
        "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0334",
            "nome" : "COMPUTACAO PARA ENGENHARIA",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0039",
        "nome" : "SISTEMAS DIGITAIS",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0334",
            "nome" : "COMPUTACAO PARA ENGENHARIA",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0040",
        "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0334",
            "nome" : "COMPUTACAO PARA ENGENHARIA",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "EST0023",
        "nome" : "PROBABILIDADE E ESTATÍSTICA",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "MAT0025",
            "nome" : "CÁLCULO 1",
            "unidade" : "MAT"
          }
        ],
        "unidade" : "EST"
      }, {
        "codigo" : "IFD0175",
        "nome" : "FISICA 2",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 30,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "MAT0025",
            "nome" : "CÁLCULO 1",
            "unidade" : "MAT"
          },
          {
            "codigo" : "IFD0171",
            "nome" : "FISICA 1",
            "unidade" : "IFD"
          }
        ],
        "unidade" : "MAT"
      }, {
        "codigo" : "MAT0026",
        "nome" : "CÁLCULO 2",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "MAT0025",
            "nome" : "CÁLCULO 1",
            "unidade" : "MAT"
          }
        ],
        "unidade" : "MAT"
      }, {
        "codigo" : "ENE0022",
        "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 0,
          "pratica": 60,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0334",
            "nome" : "COMPUTACAO PARA ENGENHARIA",
            "unidade" : "ENE"
          },
          {
            "codigo" : "ENE0013",
            "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0056",
        "nome" : "SISTEMAS MICROPROCESSADOS",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0039",
            "nome" : "SISTEMAS DIGITAIS",
            "unidade" : "ENE"
          },
          {
            "codigo" : "ENE0040",
            "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0058",
        "nome" : "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 0,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "ENE0039",
            "nome" : "SISTEMAS DIGITAIS",
            "unidade" : "ENE"
          },
          {
            "codigo" : "ENE0040",
            "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0067",
        "nome" : "SINAIS E SISTEMAS EM TEMPO CONTÍNUO",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "MAT0026",
            "nome" : "CÁLCULO 2",
            "unidade" : "MAT"
          },
          {
            "codigo" : "MAT0031",
            "nome" : "INTRODUCAO A ALGEBRA LINEAR",
            "unidade" : "MAT"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "ENE0274",
        "nome" : "FUNDAMENTOS DE REDES",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 0,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "EST0023",
            "nome" : "PROBABILIDADE E ESTATÍSTICA",
            "unidade" : "ENE"
          },
          {
            "codigo" : "ENE0013",
            "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
            "unidade" : "ENE"
          }
        ],
        "unidade" : "ENE"
      }, {
        "codigo" : "IFD0177",
        "nome" : "FISICA 2 EXPERIMENTAL",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 0,
          "pratica": 60,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "IFD0173",
            "nome" : "FISICA 1 EXPERIMENTAL",
            "unidade" : "IFD"
          },
          {
            "codigo" : "IFD0171",
            "nome" : "FISICA 1",
            "unidade" : "IFD"
          }
        ],
        "unidade" : "IFD"
      }, {
        "codigo" : "MAT0027",
        "nome" : "CÁLCULO 3",
        "modalidade": "presencial",
        "cargaHoraria" : {
          "teorica": 60,
          "pratica": 30,
          "extensionista": 0
        },
        "preRequisito": [
          {
            "codigo" : "MAT0026",
            "nome" : "CÁLCULO 2",
            "unidade" : "MAT"
          }
        ],
        "unidade" : "MAT"
      }
  ];
   
    for(let disciplina of disciplinas) {
      this.disciplinas.push(disciplina);
    }
  }

  query(params?: any) {
    if (!params) {
      return this.disciplinas;
    }

    return this.disciplinas.filter((disciplina) => {
      for (let key in params) {
        let field = disciplina[key].toString();
        if (typeof field == 'string' && this.removeAcento(field).indexOf(this.removeAcento(params[key])) >= 0) {
          return disciplina;
        } else if (field == params[key]) {
          return disciplina;
        }
      }
      return null;
    });
  }

  removeAcento (text)
  {       
      text = text.toLowerCase();                                                         
      text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
      text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
      text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
      text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
      text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
      text = text.replace(new RegExp('[Ç]','gi'), 'c');
      return text;                 
  }

}
