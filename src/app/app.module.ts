import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PoFieldModule, PoModalModule, PoModule, PoNotificationModule, PoPageDefaultComponent, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule, PoPageDynamicTableModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtheusLibCoreModule } from 'protheus-lib-core';
import { NgModule } from '@angular/core';
import { SamplePoTableAirfareComponent } from './sample-po-table-airfare/sample-po-table-airfare/sample-po-table-airfare.component';
import { SamplePoPageDynamicTableBasicComponent } from './sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component';
import { SamplePoPageDynamicTableUsersComponent } from './sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component';

const routes: Routes =[
  {path:'',component: AppComponent},
  {path:'/monitor',component: SamplePoTableAirfareComponent},
  {path:'/po-page-dynamic-table/users',component: SamplePoPageDynamicTableUsersComponent},
  {path:'/po-page-dynamic-table',component: SamplePoPageDynamicTableBasicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SamplePoTableAirfareComponent,
    SamplePoPageDynamicTableBasicComponent,
    SamplePoPageDynamicTableUsersComponent
    
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoTemplatesModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    PoTableModule,
    PoPageDynamicSearchModule,
    PoPageDynamicTableModule,
    PoModalModule,
    PoNotificationModule,
    ProtheusLibCoreModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

