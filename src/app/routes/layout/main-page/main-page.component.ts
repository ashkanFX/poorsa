import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {NavBarComponent} from "../../../core/nav-bar/nav-bar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavBarComponent
  ],
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
