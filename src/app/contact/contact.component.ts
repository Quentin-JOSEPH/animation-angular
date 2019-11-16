import { Component, OnInit } from '@angular/core';

import { ContactStruct }    from './contact-struct';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new ContactStruct('', '', '', '', '');

  /*
  name: string;
  society: string;
  email: string;
  tel: string;
  message: string;*/

  constructor() { }

  ngOnInit() {  }

  processContact() {
   const allInfo = `Nom : ${this.contact.name}
Entreprise : ${this.contact.society}
email : ${this.contact.email}
tel : ${this.contact.tel}
My message is ${this.contact.message}`;
   alert(allInfo);
  }
}
