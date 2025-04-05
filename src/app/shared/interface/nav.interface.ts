 import {ReplaySubject} from "rxjs";
 import {button} from "./button.interface";

export class navBar {
  upDateNavBar : ReplaySubject<navBar> = new  ReplaySubject<navBar>()
  text?: string
  mark?: string
  textColor?: string
  leftButton?: button[]
  rightButton?: button[]

}
