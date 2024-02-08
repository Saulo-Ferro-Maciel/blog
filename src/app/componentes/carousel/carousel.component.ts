import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  slides = [
    {img: "./assets/foto2.jpg"},
    {img: "./assets/imagem_de_test.png"},
    {img: "./assets/foto2.jpg"},
    {img: "./assets/imagem_de_test.png"},
    {img: "./assets/foto2.jpg"}
  ];

  slideConfig = {
    "slidesToShow":4,
    "slidesToScroll":4,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint":992,
        "settings": {
          "arrows": true,
          "infinite":true,
          "slidesToShow":3,
          "slidesToScroll":3
        }
      },
      {
        "breakpoint":768,
        "settings": {
          "arrows": true,
          "infinite":true,
          "slidesToShow":1,
          "slidesToScroll":1
        }
      }
    ]
  };
}
