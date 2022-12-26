import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
 
 
import { debounceTime, filter, fromEvent, map, Observable, of, switchAll, tap } from 'rxjs';
 

import { YoutubeSearchService } from '../youtube-search.service';
import { SearchResult } from '../search-result.model';
 

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})


export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeSearchService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    const obs = fromEvent(this.el.nativeElement, 'click')
    .pipe (
        map((e:any) => {
          console.log('first map :', e.target.textContent);
          return e.target.textContent;
        }), // extract the value of the input

        filter((text:string) => text && text.length > 1), //filter out if empty

        debounceTime(250), //only search after 250 ms

        tap(() => this.loading.emit(true)), // Enable loading
        // search, call the search service

        map((query:string) => {
          console.log('Last map');
          return of(query) 
          }
          ), // this.youtube.search(query)) ,
        // discard old events if new input comes in
          switchAll()
        ); 

        obs.subscribe((result) => console.log('Obs result : ', result))
  }
}
