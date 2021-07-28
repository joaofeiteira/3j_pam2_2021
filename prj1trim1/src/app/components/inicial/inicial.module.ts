import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldoContaComponent } from './blocks/saldo-conta/saldo-conta.component';
import { ResumoFaturaComponent } from './blocks/resumo-fatura/resumo-fatura.component';
import { OpcoesRapidasComponent } from './blocks/opcoes-rapidas/opcoes-rapidas.component';
import { DescubraMaisComponent } from './blocks/descubra-mais/descubra-mais.component';
import { CardsComponent } from './blocks/cards/cards.component';


@NgModule({
  declarations: [
    CardsComponent,
    DescubraMaisComponent,
    OpcoesRapidasComponent,
    ResumoFaturaComponent,
    SaldoContaComponent
  ],
  exports: [
    CardsComponent,
    DescubraMaisComponent,
    OpcoesRapidasComponent,
    ResumoFaturaComponent,
    SaldoContaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicialModule { }
