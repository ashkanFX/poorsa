import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-contact.component.html',
  styleUrls: ['./floating-contact.component.scss']
})
export class FloatingContactComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openWhatsApp() {
    const phoneNumber = '989123456789';
    const message = 'سلام، می‌خواهم اطلاعات بیشتری دریافت کنم.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  openTelegram() {
    const username = 'poorsa_support';
    const message = 'سلام، می‌خواهم اطلاعات بیشتری دریافت کنم.';
    const telegramUrl = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }

  callPhone() {
    const phoneNumber = '982112345678';
    window.location.href = `tel:${phoneNumber}`;
  }
}
