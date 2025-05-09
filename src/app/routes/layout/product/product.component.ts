import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule , AvatarModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
