import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit, OnDestroy {
  downloadPriceList() {
    throw new Error('Method not implemented.');
  }

  openPriceList() {
    throw new Error('Method not implemented.');
  }

  showProducts() {
    throw new Error('Method not implemented.');
  }

  parallaxOffset = 0;

  constructor(private router: Router) {
  }

  @ViewChild('blockSection') blockSection!: ElementRef;
  isVisible: boolean = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('🔥 Block is visible!');
          this.isVisible = true;
          observer.unobserve(this.blockSection.nativeElement);
        }
      });
    }, {
      threshold: 0.2 // 30% visible before triggering
    });

    observer.observe(this.blockSection.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.parallaxOffset = window.pageYOffset * 0.4; // Adjust 0.5 to control speed
  }

  ngOnInit() {
    // The animation will start automatically when the component loads
  }

  ngOnDestroy() {
  }
}
