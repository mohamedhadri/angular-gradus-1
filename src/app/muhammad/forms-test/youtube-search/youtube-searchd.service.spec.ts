import { TestBed } from '@angular/core/testing';

import { YoutubeSearchdService } from './youtube-search.injectables';

describe('YoutubeSearchdService', () => {
  let service: YoutubeSearchdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeSearchdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
