import { Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import * as Hammer from 'hammerjs';
declare var $: any;


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroSlides = [
    {
      header: 'Diseñamos para pensar',
      // tslint:disable-next-line:max-line-length
      content: 'En Elegra nos centramos en ofrecer nuestros servicios a las empresas que valoran el buen trabajo que hay detrás de un proyecto tecnológico. Dedicándonos al trabajo que nos apasiona conseguimos los mejores resultados.'
    },
    {
      header: 'Diseñamos para pensar',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta deserunt veniam rem consectetur aliquam natus aliquid laudantium illum eum, accusamus optio voluptates assumenda quasi praesentium consequuntur cum repellat provident maxime!'
    },
    {
      header: 'Diseñamos para pensar',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro delectus non dignissimos voluptate voluptas tempora reprehenderit voluptatum, quidem quos ducimus laudantium in, iste velit eveniet minima voluptatibus temporibus, veniam officia.'
    }
  ];

  constructor(
    private renderer: Renderer2
  ) {}



  @ViewChild('heroCarousel') private heroCarousel: ElementRef;
  // // tslint:disable-next-line:no-unused-expression
  // public swipe(): void {
  //   const carousel = this.heroCarousel.nativeElement;
  //   const $carousel = $(carousel);
  //   const hammertime = new Hammer(carousel, {
  //       recognizers: [
  //           [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
  //       ]
  //   });
  //   hammertime.on('swipeleft', function () {
  //     $carousel.carousel('prev');
  //   });
  //   hammertime.on('swiperight', function () {
  //     $carousel.carousel('next');
  //   });
  // }


  ngOnInit(
  ) {
  }

}
