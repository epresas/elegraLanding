import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  sectionTitle = 'Servicios';
  serviceList = [
    {
      title: 'Consultoría informática',
      // tslint:disable-next-line:max-line-length
      text: 'Diseñados para pensar. Nuestro principio es que no hay solución óptima sin un estudio previo en el que conocer tu negocio. Analizamos tus necesidades y planteamos la mejor solución.',
      imgPath: './assets/icons/development.svg'
    },
    {
      title: 'Desarrollo',
      // tslint:disable-next-line:max-line-length
      text: 'Desarrollamos software basado en las últimas tecnologías, optimizando su rendimiento y certificando su calidad. Grandes marcas cuentan con nuestros desarrollos, y desde entonces, mantienen el rendimiento, calidad y sencillez en la gestión.',
      imgPath: './assets/icons/consultancy.svg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
