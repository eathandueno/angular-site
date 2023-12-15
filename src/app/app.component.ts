import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import your standalone components
import { NavbarComponent } from './navbar/navbar.component';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ServicesComponent,
    ContactFormComponent,
    TestimonialSliderComponent,
    NewsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-site';
}
