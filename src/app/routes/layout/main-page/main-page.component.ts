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
export class MainPageComponent     {


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
      threshold: 0.5 // 30% visible before triggering
    });

    observer.observe(this.blockSection.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.parallaxOffset = window.pageYOffset * 0.4; // Adjust 0.5 to control speed
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/PDF/sample.pdf'; // your PDF file path
    link.download = 'sample.pdf'; // desired file name
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
