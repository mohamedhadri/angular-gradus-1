import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsTestComponent } from './reactive-forms-test/reactive-forms-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {SharedModule} from "../../shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormsTestComponent, data: { breadcrumb: 'reactive-form' } },
];

@NgModule({
  declarations: [
    ReactiveFormsTestComponent
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
