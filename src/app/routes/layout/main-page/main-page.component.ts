import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnDestroy ,AfterViewInit {
  @ViewChild('blockSection') blockSection!: ElementRef;
  isVisible: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.parallaxOffset = window.scrollY * 0.4;
  }
  parallaxOffset = 0;
  private observer!: IntersectionObserver;

  constructor() {}
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer.unobserve(this.blockSection.nativeElement);
        }
      });
    }, {
      threshold: 0.5
    });

    this.observer.observe(this.blockSection.nativeElement);
  }




  downloadPdf() {
    const link = document.createElement('a');
    link.style.display = 'none'; // لینک رو مخفی کن
    link.href = 'assets/PDF/sample.pdf';
    link.download = 'لیست قسمت.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
