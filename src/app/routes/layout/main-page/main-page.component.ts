import { Component } from '@angular/core';
import {NavBarComponent} from "../../../core/nav-bar/nav-bar.component";
import {navBar} from "../../../shared/interface/nav.interface";
import {ReplaySubject} from "rxjs";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
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
