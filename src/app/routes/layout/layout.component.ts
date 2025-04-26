import { Component } from '@angular/core';
import {Route, RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../../core/nav-bar/nav-bar.component";
import {navBar} from "../../shared/interface/nav.interface";
import {ReplaySubject} from "rxjs";
import {PrimeIcons} from "primeng/api";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor( ) {
  }
  navBarConf: navBar = {
    textColor: 'text-2-color',
    upDateNavBar: new ReplaySubject<navBar>(),
    rightButton: [],
    leftButton: [
      {
        text: ' صفحه اصلی',
        icon: PrimeIcons.TAG,
        router : {
          component :null,
          url : 'main'
        },
        show: true,
        clicked: () => {
         }
      },
      {
        text: ' معرفی محصولات',
        icon: PrimeIcons.HOME,
        show: true,
        router : {
          component :null,
          url : 'product'
        },
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
