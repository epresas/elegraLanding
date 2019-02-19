import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconPath: '../../../assets/icons/';
  socialBookmarks = [
    {
      name: 'Twitter',
      imgPath: '../../../assets/icons/twitter-letter-logo.svg',
      href: 'https://twitter.com/elegrasys'
    },
    {
      name: 'Facebook',
      imgPath: '../../../assets/icons//facebook-letter-logo.svg',
      href: 'https://www.facebook.com/elegrasys'
    },
    {
      name: 'Linkedin',
      imgPath: '../../../assets/icons//linkedin-logo.svg',
      href: 'https://es.linkedin.com/company/elegra-systems-s-l-'
    }
];
  constructor() { }

  ngOnInit() {
  }

}
