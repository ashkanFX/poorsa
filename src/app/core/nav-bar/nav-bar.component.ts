import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {navBar} from "../../shared/interface/nav.interface";
import {CommonModule, NgClass, TitleCasePipe} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    MenubarModule, ButtonModule, RippleModule, NgClass, CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  @Input() config: navBar = new navBar()
  onShow: string = "hidden"


  constructor() {
  }

  ngOnInit(): void {
    this.config.upDateNavBar?.subscribe(res => {
      this.config = res
    })
  }


  clicked(item: any) {
    item.clicked()
  }

}
