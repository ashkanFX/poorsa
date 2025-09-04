import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  discount: number;
}

@Component({
  selector: 'app-price-estimate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price-estimate.component.html',
  styleUrls: ['./price-estimate.component.scss']
})
export class PriceEstimateComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'بطری ادرار - استریل',
      description: 'بطری ادرار استریل با ظرفیت 100ml',
      price: 15000,
      quantity: 1,
      discount: 0
    },
    {
      id: 2,
      name: 'بطری ادرار - غیر استریل',
      description: 'بطری ادرار غیر استریل با ظرفیت 100ml',
      price: 12000,
      quantity: 1,
      discount: 0
    },
    {
      id: 3,
      name: 'بطری ادرار - استریل رنگی',
      description: 'بطری ادرار استریل رنگی با ظرفیت 100ml',
      price: 18000,
      quantity: 1,
      discount: 0
    },
    {
      id: 4,
      name: 'بطری ادرار - غیر استریل رنگی',
      description: 'بطری ادرار غیر استریل رنگی با ظرفیت 100ml',
      price: 14000,
      quantity: 1,
      discount: 0
    },
    {
      id: 5,
      name: 'بطری ادرار - استریل شفاف',
      description: 'بطری ادرار استریل شفاف با ظرفیت 100ml',
      price: 16000,
      quantity: 1,
      discount: 0
    }
  ];

  decreaseQuantity(index: number): void {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
    }
  }

  increaseQuantity(index: number): void {
    if (this.products[index].quantity < 10) {
      this.products[index].quantity++;
    }
  }

  updateQuantity(index: number, event: any): void {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 10) {
      this.products[index].quantity = value;
    } else if (value < 1) {
      this.products[index].quantity = 1;
    } else if (value > 10) {
      this.products[index].quantity = 10;
    }
  }

  updateDiscount(index: number, event: any): void {
    this.products[index].discount = parseInt(event.target.value);
  }

  calculateItemTotal(index: number): number {
    const product = this.products[index];
    const totalPrice = product.price * product.quantity;
    const discountAmount = (totalPrice * product.discount) / 100;
    return totalPrice - discountAmount;
  }

  getTotalQuantity(): number {
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  getTotalDiscount(): number {
    return this.products.reduce((total, product) => {
      const itemTotal = product.price * product.quantity;
      const discountAmount = (itemTotal * product.discount) / 100;
      return total + discountAmount;
    }, 0);
  }

  getFinalPrice(): number {
    return this.getTotalPrice() - this.getTotalDiscount();
  }

  resetAll(): void {
    this.products.forEach(product => {
      product.quantity = 1;
      product.discount = 0;
    });
  }

  placeOrder(): void {
    const orderData = {
      products: this.products.filter(p => p.quantity > 0),
      totalQuantity: this.getTotalQuantity(),
      totalPrice: this.getTotalPrice(),
      totalDiscount: this.getTotalDiscount(),
      finalPrice: this.getFinalPrice()
    };

    // Send to WhatsApp
    const message = this.generateOrderMessage(orderData);
    const phoneNumber = '989123456789';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  private generateOrderMessage(orderData: any): string {
    let message = 'سلام، می‌خواهم سفارش محصولات پزشکی ثبت کنم:\n\n';
    
    orderData.products.forEach((product: any, index: number) => {
      if (product.quantity > 0) {
        const itemTotal = product.price * product.quantity;
        const discountAmount = (itemTotal * product.discount) / 100;
        const finalPrice = itemTotal - discountAmount;
        
        message += `${index + 1}. ${product.name}\n`;
        message += `   تعداد: ${product.quantity} کارت\n`;
        message += `   قیمت واحد: ${product.price.toLocaleString('fa-IR')} ریال\n`;
        message += `   تخفیف: ${product.discount}%\n`;
        message += `   قیمت نهایی: ${finalPrice.toLocaleString('fa-IR')} ریال\n\n`;
      }
    });
    
    message += `تعداد کل کارت‌ها: ${orderData.totalQuantity}\n`;
    message += `قیمت کل: ${orderData.totalPrice.toLocaleString('fa-IR')} ریال\n`;
    message += `تخفیف کل: ${orderData.totalDiscount.toLocaleString('fa-IR')} ریال\n`;
    message += `قیمت نهایی: ${orderData.finalPrice.toLocaleString('fa-IR')} ریال\n\n`;
    message += 'لطفاً راهنمایی کنید.';
    
    return message;
  }
}