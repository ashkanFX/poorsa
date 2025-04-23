import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {navBar} from "../../shared/interface/nav.interface";
import {ReplaySubject} from "rxjs";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  navBarConf: navBar = {
    textColor: 'text-2-color',
    upDateNavBar: new ReplaySubject<navBar>(),
    rightButton: [],
    leftButton: [
      {
        text: ' صفحه اصلی',
        icon: PrimeIcons.TAG,
        show: true,
        clicked: () => {
        }
      },
      {
        text: ' معرفی محصولات',
        icon: PrimeIcons.HOME,
        show: true,
        clicked: () => {
        }
      },
      {
        text: ' لیست قیمت',
        icon: PrimeIcons.ARROW_RIGHT,
        show: true,
        clicked: () => {
        }
      }, {
        text: ' تماس با ما',
        icon: PrimeIcons.ARROW_RIGHT,
        show: true,
        clicked: () => {
        }
      },
    ]
  };
}
