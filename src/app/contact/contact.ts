import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly emailParts = [
    's',
    'a',
    'n',
    'd',
    'r',
    'a',
    'r',
    'o',
    'j',
    'a',
    's',
    't',
    'r',
    'a',
    'd',
    'u',
    'c',
    'a',
    'o',
    '@',
    'g',
    'm',
    'a',
    'i',
    'l',
    '.',
    'c',
    'o',
    'm',
  ];

  readonly email = this.emailParts.join('');
  readonly mailtoHref = `mailto:${this.email}?subject=Orçamento%20de%20tradução%20juramentada`;

  openEmail(event: Event): void {
    event.preventDefault();
    window.location.href = this.mailtoHref;
  }
}
