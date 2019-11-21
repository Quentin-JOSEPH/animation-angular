import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuHover = false;
  btnBurgerActive = false;

  constructor() { }

  nav = [
    {
      nom: 'Accueil',
      lien: 'accueil'
    },
    {
      nom: 'Solution',
      lien: 'solution'
    },
    {
      nom: 'Galerie',
      lien: 'galerie'
    },
    {
      nom: 'Contact',
      lien: 'contact'
    }
  ];

  clickBurgerMenu() {
    console.log('Click');
    console.log(this.btnBurgerActive);
    this.btnBurgerActive = !this.btnBurgerActive;
    console.log(this.btnBurgerActive);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if (window.pageYOffset === 0) {
      this.menuHover = false;
    } else if (window.pageYOffset !== 0 && !this.menuHover) {
      this.menuHover = true;
    }
  }

  ngOnInit() {
    if (window.pageYOffset === 0) {
      this.menuHover = false;
    } else if (window.pageYOffset !== 0 && !this.menuHover) {
      this.menuHover = true;
    }
  }

}
