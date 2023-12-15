import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NewsService } from './news.service';
import { News } from './news.model';

@Component({
  selector: 'app-news',
  standalone: true, // Ensure standalone is set to true
  imports: [CommonModule], // Include CommonModule here
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsItems: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsItems = this.newsService.getNews();
  }
}
