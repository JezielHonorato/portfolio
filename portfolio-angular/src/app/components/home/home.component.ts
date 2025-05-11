import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  copyContact(element: HTMLElement): void {
    const text = element.innerText.replace('&#64;', '@');
    navigator.clipboard.writeText(text).then(() => {
      alert('E-mail copiado!');
    });
  }
}
