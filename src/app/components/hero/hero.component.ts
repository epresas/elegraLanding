import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(
    private renderer: Renderer2
  ) {}


  ngOnInit() {
  }

}
