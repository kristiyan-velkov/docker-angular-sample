import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly name = 'Kristiyan Velkov';
  protected readonly socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kristiyan-velkov-763130b3/',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kristiyan-velkov',
      icon: 'github'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@kristiyanvelkov',
      icon: 'medium'
    },
    {
      name: 'Newsletter',
      url: 'https://kristiyanvelkov.substack.com',
      icon: 'newsletter'
    }
  ];
}
