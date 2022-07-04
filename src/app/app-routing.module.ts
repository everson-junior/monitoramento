import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SamplePoPageDynamicTableBasicComponent } from "./sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic/sample-po-page-dynamic-table-basic.component";
import { SamplePoPageDynamicTableUsersComponent } from "./sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users/sample-po-page-dynamic-table-users.component";
import { SamplePoTableAirfareComponent } from "./sample-po-table-airfare/sample-po-table-airfare/sample-po-table-airfare.component";

const routes: Routes =[
    {path:'',component: AppComponent},
    {path:'/monitor',component: SamplePoTableAirfareComponent},
    {path:'/users',component: SamplePoPageDynamicTableUsersComponent},
    {path:'/table',component: SamplePoPageDynamicTableBasicComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModules{}