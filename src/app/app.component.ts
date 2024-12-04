import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'innova-frontedFinal';

  ngOnInit() {
    setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
      const appRoot = document.querySelector('app-root');
      if (appRoot) {
        (appRoot as HTMLElement).style.display = 'block';
      }
    }, 0);
  }
  
}
