import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
