import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service';
import { Video } from './search.interface';
@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.css']
})
export class SearchExampleComponent implements OnInit {

 
  inputTouched = false;
  loading = false;
  videos: Video[] = [];

  constructor(private searchService: SearchService) { }

  handleSearch(inputValue: string) {
    this.loading = true;
    this.searchService.getVideos(inputValue)
      .subscribe((items: any) => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
