import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  pensamentos = [
    {
      conteudo: 'Terminei! Só falta testar',
      autoria: 'Dev Júnior',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Se não tem problema, solucionado está.',
      autoria: 'Dev Sênior',
      modelo: 'modelo2'
    },
    {
      conteudo: 'dsadjsaisdjiasjdoajodipadpojadjaodjksadkopdjasdjhsaidjsaokdosadsadsjapjdsajksadpojasjdsajdpdksapodksaoasdjdopsajdsaopjdsajdaspojdaspodsjpdposajdopsajsdjdapjopdasiopdjiaopsdiopdjasiopdjaspoidjadhiasdhoashdioashddioashdiaoshdiosahdioashiodhasiodhasiodhaosihdoashdoiahsdohasd',
      autoria: 'Dev Sênior',
      modelo: 'modelo2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
