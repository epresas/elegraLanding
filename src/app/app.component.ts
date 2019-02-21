import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild('clients', { read: ElementRef }) public clients: ElementRef;
  @ViewChild('intro', { read: ElementRef }) public intro: ElementRef;
  @ViewChild('mainContent', { read: ElementRef }) public mainContent: ElementRef;
  @ViewChild('services', { read: ElementRef }) public services: ElementRef;
  title = 'elegraLanding';
  menuOpen = false;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  onToggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }


  public onNavigateToHero () {
    console.log(this.mainContent.nativeElement);
    this.mainContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    this.onToggleMenu();
  }
  public onNavigateToClients () {
    this.clients.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    this.onToggleMenu();
  }
  public onNavigateToServices () {
    this.services.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    this.onToggleMenu();
  }
  public onNavigateToIntro () {
    this.intro.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    this.onToggleMenu();
  }

}
