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
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';
import { youTubeSearchInjectables } from './youtube-search/youtube-search.injectables';
 

 

export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormsTestComponent, data: { breadcrumb: 'reactive-form' } },
  { path: 'card-example', component: CardExampleComponent, data: { breadcrumb: 'card-example' } },
  { path: 'youtube-search', component: YoutubeSearchComponent, data: { breadcrumb: 'youtube-search' } },
];

@NgModule({
  declarations: [
  
    ReactiveFormsTestComponent,
    TableDataComponent,
    ObservableExampleComponent,
    CardExampleComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    
  ],
    imports: [
      MatDatepickerModule,
      FormsModule,
      HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    providers:[youTubeSearchInjectables]
})
export class FormsTestModule { }
