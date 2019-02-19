import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  menuOpen = false;
  constructor(
    private renderer: Renderer2
  ) {}

  onToggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
  ngOnInit() {
  }

}
