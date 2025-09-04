import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { navBar } from "../../shared/interface/nav.interface";
import { CommonModule, TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit, OnDestroy {
  @Input() config: navBar = new navBar();
  
  menuOpen: boolean = false;
  isElevated: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.config.upDateNavBar?.subscribe(res => {
      this.config = res;
    });
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions if needed
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.isElevated = window.scrollY > 10;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768 && this.menuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.updateBodyScroll();
  }

  onNavigate(item: any): void {
    this.clicked(item);
    this.closeMenu();
  }

  clicked(item: any): void {
    if (item.clicked) {
      item.clicked();
    }
  }

  private updateBodyScroll(): void {
    if (typeof document !== 'undefined') {
      if (this.menuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  }
}
