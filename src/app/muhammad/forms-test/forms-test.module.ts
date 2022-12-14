import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsTestComponent } from './reactive-forms-test/reactive-forms-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {SharedModule} from "../../shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TableDataComponent } from './table-data/table-data.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
 

 

export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormsTestComponent, data: { breadcrumb: 'reactive-form' } },
  { path: 'card-example', component: CardExampleComponent, data: { breadcrumb: 'card-example' } },
];

@NgModule({
  declarations: [
    CardExampleComponent,
    ReactiveFormsTestComponent,
    TableDataComponent,
    ObservableExampleComponent,
    CardExampleComponent,
    
  ],
    imports: [
      MatDatepickerModule,
      FormsModule,
      HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
      RouterModule.forChild(routes),
      SharedModule
    ]
})
export class FormsTestModule { }
