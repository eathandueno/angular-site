import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private newsItems: News[] = [
    new News('First News Item', 'This is the first news content.', new Date()),
    // Add more static news items here
  ];

  getNews() {
    return [...this.newsItems];
  }
}
