import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientsList = [
    {
      name: 'Ferrovial',
      imgPath: './assets/images/logo_ferrovial.png'
    },
    {
      name: 'American Express',
      imgPath: './assets/images/logo_american-express.png'
    },
    {
      name: 'I.E. Business school',
      imgPath: './assets/images/logo_ie-business.png'
    },
    {
      name: 'Ferrovial',
      imgPath: './assets/images/logo_ferrovial.png'
    },
    {
      name: 'American Express',
      imgPath: './assets/images/logo_american-express.png'
    },
    {
      name: 'I.E. Business school',
      imgPath: './assets/images/logo_ie-business.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
