import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
    // {
    //   nom: 'Réalisation',
    //   lien: 'realisation'
    // },
    {
      nom: 'Contact',
      lien: 'contact'
    }
  ];

  ngOnInit() {
  }

}
