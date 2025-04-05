import {PrimeIcons} from "primeng/api";
import {Routing} from "./routing.interface";

export interface button {
  text: string,
  show: boolean
  icon?: PrimeIcons,
  router?: Routing // todo
  clicked($event?: any): void | any;
}
