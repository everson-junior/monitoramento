import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from '@po-ui/ng-components';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions
} from '@po-ui/ng-templates';

import { SamplePoPageDynamicTableUsersService } from './sample-po-page-dynamic-table-users.service';

@Component({
  selector: 'app-sample-po-page-dynamic-table-users',
  templateUrl: './sample-po-page-dynamic-table-users.component.html',
  styleUrls: ['./sample-po-page-dynamic-table-users.component.css'],
  providers: [SamplePoPageDynamicTableUsersService]
})
export class SamplePoPageDynamicTableUsersComponent {
  @ViewChild('userDetailModal') userDetailModal!: PoModalComponent;
  @ViewChild('dependentsModal') dependentsModal!: PoModalComponent;

  //readonly serviceApi = 'https://po-sample-api.herokuapp.com/v1/people';
  readonly serviceApi = '/api/v1/apimonitor';

  actionsRight = false;
  detailedUser: any;
  dependents: any;
  reprocessar: any;
  quickSearchWidth: number = 3;

  readonly actions: PoPageDynamicTableActions = {
    new: '/documentation/po-page-dynamic-edit',
    remove: true,
    removeAll: true
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Monitor' }]
  };

  readonly cityOptions: Array<object> = [
    { value: 'PRODUTO', label: 'PRODUTO' },
    { value: 'VENDA', label: 'VENDA' },
    { value: 'VENDA NFE', label: 'VENDA NFE' },
    { value: 'NOTA DE ENTRADA', label: 'NOTA DE ENTRADA' },
    { value: 'NOTA DE SAIDA', label: 'NOTA DE SAIDA' },
    { value: 'NOTA SAIDA CANC', label: 'NOTA SAIDA CANC' },
    { value: 'PRECO', label: 'PRECO' },
    { value: 'NCM', label: 'NCM' },
    { value: 'CATEGORIA', label: 'CATEGORIA' },
    { value: 'UN MEDIDA', label: 'UN MEDIDA' },
    { value: 'CEST', label: 'CEST' },
    { value: 'OPERADOR CAIXA', label: 'OPERADOR CAIXA' },
    { value: 'INVENTARIO', label: 'INVENTARIO' },
    { value: 'IMPOSTO PROD', label: 'IMPOSTO PROD' },
    { value: 'IMPOSTO VENDA', label: 'IMPOSTO VENDA' },
    { value: 'ADMINISTRADORA', label: 'ADMINISTRADORA' },
    { value: 'CAIXA SANGRIA', label: 'CAIXA SANGRIA' },
    { value: 'FORNECEDOR', label: 'FORNECEDOR' },
    { value: 'PERFIL OPERADOR', label: 'PERFIL OPERADOR' },
    { value: 'OPERADOR LOJA', label: 'OPERADOR LOJA' },
    { value: 'FORMA PAGAMENTO', label: 'FORMA PAGAMENTO' },
    { value: 'CADASTRO LOJA', label: 'CADASTRO LOJA' },
    { value: 'COMPARTILHAMENT', label: 'COMPARTILHAMENT' },
    { value: 'ICMS', label: 'ICMS' },
    { value: 'PIS/COFINS', label: 'PIS/COFINS' },
    { value: 'MARCAS', label: 'MARCAS' },
    { value: 'SALDO ESTOQUE', label: 'SALDO ESTOQUE' },
    { value: 'PEDIDO', label: 'PEDIDO' },
    { value: 'GRADE', label: 'GRADE' },
    { value: 'CONF VENDA', label: 'CONF VENDA' },
    { value: 'CONFIRMA PAGTO', label: 'CONFIRMA PAGTO' },
    { value: 'STATUS PEDIDO', label: 'STATUS PEDIDO' },
    { value: 'SANGRIA', label: 'SANGRIA' },
    { value: 'SUPRIMENTO', label: 'SUPRIMENTO' },
    { value: 'CLIENTE', label: 'CLIENTE' },
    { value: 'COMPL PAGAMENTO', label: 'COMPL PAGAMENTO' }
];


  readonly fields: Array<any> = [
    { property: 'id', label: 'Identificador Unico',  key: true, visible: true, filter: true },
    { property: 'sistema', label: 'Assinante ', filter: true, gridColumns: 6 },
    { property: 'processo', label: 'Processo ', filter: true, gridColumns: 6, duplicate: true,options: this.cityOptions,sortable: false },
    { property: 'data',label: 'Data Processada',ilter: true, gridColumns: 6,visible: true,allowColumnsManager: true},
    { property: 'hora', label: 'Hora Processada', filter: true, duplicate: true, gridColumns: 12 }
  ];

  detailFields: Array<PoDynamicViewField> = [
    
    { property: 'status', tag: true, gridLgColumns: 4, divider: 'Analise Detalhada' },
    { property: 'localerro',label: 'Processamento', gridSmColumns: 4 },
    { property: 'erromsg', label: 'Detalhemento erro', gridLgColumns: 4 },
  ];

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    /*{
      label: 'Arquivar Itens',
      action: this.onClickActionsSide.bind(this),
      visible: this.isVisibleActionsRight.bind(this),
      icon: 'po-icon-arrow-right'
    },*/
    {
      label: 'Reprocessar Itens',
      action: this.onClickActionsSide.bind(this),
      visible: this.isVisibleActionsRight.bind(this),
      icon: 'po-icon-arrow-right'
    },
  
    { label: 'Print', action: this.printPage.bind(this), icon: 'po-icon-print' },
    
    {
      label: 'Download .csv',
      action: this.usersService.downloadCsv.bind(this.usersService, this.serviceApi),
      icon: 'po-icon-download'
    }
  ];

  
  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    {
      label: 'Detalhes',
      action: this.onClickUserDetail.bind(this),
      disabled: this.isUserInactive.bind(this),
      icon: 'po-icon-user'
    },
    {
      label: 'Dependências',
      action: this.onClickDependents.bind(this),
      visible: this.hasDependents.bind(this),
      icon: 'po-icon-user'
    },
    {
      label: 'Reprocessar',
      action: this.onClickDependents.bind(this),
      visible: this.hasDependents.bind(this),
      icon: 'po-icon-user'
    }
  ];

  constructor(private usersService: SamplePoPageDynamicTableUsersService) {}

  onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'id', label: 'Identificador Unico',  key: true, visible: true, filter: true },
        { property: 'sistema', label: 'Assinante ', filter: true, gridColumns: 6 },
        { property: 'processo', label: 'Processo ', filter: true, gridColumns: 6, duplicate: true},
        { property: 'data',label: 'Data Processada',filter: true, gridColumns: 6,
          visible: true,
          allowColumnsManager: true
        },
        { property: 'hora', label: 'Hora Processada', filter: true, duplicate: true, gridColumns: 12 },
        //{ property: 'processo', initValue: 'Venda' }
      ]
    };
  }

  isUserInactive(person: any) {
    return person.status === 'S';
  }

  hasDependents(person: any) {
    return person.dependents.length !== 0;
  }

  printPage() {
    window.print();
  }

  private onClickUserDetail(user: any) {
    this.detailedUser = user;

    this.userDetailModal.open();
  }

  private onClickDependents(user: any) {
    this.dependents = user.dependents;

    this.dependentsModal.open();
  }
  
  private onClickReprocessar(user: any) {
    this.reprocessar = user.reprocessar;

    return !this.actionsRight;
  }

  private onClickActionsSide(_value: any) {
    this.actionsRight = !this.actionsRight;
  }

  private isVisibleActionsRight(_value: boolean) {
    return !this.actionsRight;
  }
  private isVisibleActionsLeft(_value: boolean) {

    return this.actionsRight;
  }
}