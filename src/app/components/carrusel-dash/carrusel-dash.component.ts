import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-dash',
  standalone: false,
  
  templateUrl: './carrusel-dash.component.html',
  styleUrl: './carrusel-dash.component.css'
})
export class CarruselDashComponent {
  cards = [
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/500/we/1600/he/500/x/0/y/0/s/0/q/60/zc/3/f/0/rgb/000000/src/58418/n/banner-programa-de-aptitud-acad-2025-1.png'},
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/500/we/1600/he/500/x/0/y/0/s/0/q/60/zc/3/f/0/rgb/000000/src/59368/n/banner-principal.png'},
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/500/we/1600/he/500/x/0/y/0/s/0/q/60/zc/3/f/0/rgb/000000/src/59243/n/conecta-urp-egresados-banner-principal.png'},
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/500/we/1600/he/500/x/0/y/0/s/0/q/60/zc/3/f/0/rgb/ffffff/src/59287/n/banner-bolsa-de-empleo-urp-1.png'},
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/488/we/1600/he/500/x/0/y/-6/s/0/q/60/zc/3/f/0/rgb/000000/src/59047/n/banner-resultados-reutilizable-55-2.png'},
    { img: 'https://www.urp.edu.pe/img/thumbnails/wm/1600/hm/500/we/1600/he/500/x/0/y/0/s/0/q/60/zc/3/f/0/rgb/000000/src/59425/n/banner-principal-32.png'}
  ];
}
