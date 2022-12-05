import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsTestComponent } from './reactive-forms-test/reactive-forms-test.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {SharedModule} from "../../shared/shared.module";

export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormsTestComponent, data: { breadcrumb: 'reactive-form' } },
];

@NgModule({
  declarations: [
    ReactiveFormsTestComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
      RouterModule.forChild(routes),
      SharedModule
    ]
})
export class FormsTestModule { }
