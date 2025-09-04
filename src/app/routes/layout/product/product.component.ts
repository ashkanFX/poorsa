import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {AvatarModule} from "primeng/avatar";
import {TableModule} from "primeng/table";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, AvatarModule, TableModule, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products    = [
    { name: 'Urine bottle', sterility: 'ST', color: 'Clear / Orange' },
    { name: 'Urine bottle', sterility: 'UN_ST', color: 'Clear / Green' }
  ];
  products2 = [
    { sterility: 'ST', color: 'Clear / Orange', caseQty: 500 },
    { sterility: 'UN_ST', color: 'Clear / Green', caseQty: 700 }
  ];  products3 = [
    { sterility: 'ST', color: 'Clear / Orange', caseQty: 500 },
    { sterility: 'UN_ST', color: 'Clear / Green', caseQty: 700 }
  ];

  openWhatsApp() {
    const phoneNumber = '989123456789'; // شماره واتساپ
    const message = 'سلام، می‌خواهم محصولات پزشکی سفارش دهم. لطفاً راهنمایی کنید.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
