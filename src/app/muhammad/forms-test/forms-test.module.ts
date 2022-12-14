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

import { TagsSelectComponent } from './tags-select/tags-select.component';

 
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayDropdownComponent } from './tags-select/overlay-dropdown/overlay-dropdown.component';
import { YoutubeSearchService,  } from './youtube-search/youtube-search.service';
import { SearchExampleComponent } from './search-example/search-example.component';
import { SearchService } from './search-example/search.service';
import { SearchInputComponent } from './search-example/search-input/search-input.component';
import { SearchListComponent } from './search-example/search-list/search-list.component';

 

export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormsTestComponent, data: { breadcrumb: 'reactive-form' } },
  { path: 'card-example', component: CardExampleComponent, data: { breadcrumb: 'card-example' } },
  { path: 'youtube-search', component: YoutubeSearchComponent, data: { breadcrumb: 'youtube-search' } },
  { path: 'tags-select', component: TagsSelectComponent, data: { breadcrumb: 'tags-select' } },
  { path: 'search-example', component: SearchExampleComponent, data: { breadcrumb: 'search-example' } },
];

@NgModule({
  declarations: [
  
    ReactiveFormsTestComponent,
    TableDataComponent,
    ObservableExampleComponent,
    CardExampleComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    TagsSelectComponent,
    OverlayDropdownComponent,
    SearchExampleComponent,
    SearchInputComponent,
    SearchListComponent,
  

    
  ],
    imports: [
      MatDatepickerModule,
      FormsModule,
      HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        OverlayModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    providers:[
     
      YoutubeSearchService,
      SearchService
    
    ]
})
export class FormsTestModule { }
