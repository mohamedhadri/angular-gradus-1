import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SearchResult } from './search-result.model';
import { map } from "rxjs/operators"; 




//  const YOUTUBE_API_KEY: string = "AIzaSyBZioOI2LEHZ_xlzu2VTRXlhDlBbV4HJzU";
// export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";



@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor(
    private http: HttpClient,
      private   YOUTUBE_API_KEY: string = "AIzaSyBZioOI2LEHZ_xlzu2VTRXlhDlBbV4HJzU",
     private YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search",
  ) { }
 

 search(query: string): Observable<SearchResult[]> {

  const params: string = [
    `q=${query}`,
    `key=${this.YOUTUBE_API_KEY}`,
    `part=snippet`,
    `type=video`,
    `maxResults=10`
  ].join('&');

  const queryUrl = `${this.YOUTUBE_API_URL}?${params}`;

  return this.http.get(queryUrl).pipe(map(response => {

    return <any>response['items'].map(item => {
      console.log("raw item", item); 
      
      return new SearchResult({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.high.url
      });
    });
  }));
}
    


 
}
