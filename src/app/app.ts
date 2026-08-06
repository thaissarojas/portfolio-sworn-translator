import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MainContent } from './main-content/main-content';
import { Services } from './services/services';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainContent, Services, AboutMe, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sworn-translator-portfolio');
}
