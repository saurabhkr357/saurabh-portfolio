import {
  Component,
  OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

interface TipOption {
  amount: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './support.html',
  styleUrl: './support.scss'
})
export class Support implements OnInit {
  // Replace these placeholders with YOUR own UPI details.
  readonly upiId = 'saurabhkr357-1@okicici';
  readonly recipientName = 'SAURABH KUMAR';

  readonly tips: TipOption[] = [
    {
      amount: 49,
      title: 'Espresso',
      description: 'A quick shot. Fixes one bug.'
    },
    {
      amount: 99,
      title: 'Cappuccino',
      description: 'Powers a late-night deploy.'
    },
    {
      amount: 199,
      title: 'Cold Brew',
      description: 'Keeps a side project alive.'
    },
    {
      amount: 499,
      title: 'Sprint Fuel',
      description: 'A whole open-source sprint.'
    }
  ];

  selectedAmount = 99;
  customAmount = 100;
  isCustom = false;

  paymentNote = 'Portfolio support';

  qrCodeDataUrl = '';
  statusMessage = '';
  isGeneratingQr = false;
  thankYouVisible = false;

  ngOnInit(): void {
    void this.generateQrCode();
  }

  get selectedTipTitle(): string {
    return this.tips.find(
      tip => tip.amount === this.selectedAmount
    )?.title ?? 'Support';
  }

  get amount(): number {
    return this.isCustom
      ? Number(this.customAmount)
      : this.selectedAmount;
  }

  get validAmount(): boolean {
    return (
      Number.isFinite(this.amount) &&
      this.amount >= 1 &&
      this.amount <= 100000
    );
  }

  get formattedAmount(): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(this.validAmount ? this.amount : 0);
  }

  get paymentUri(): string {
    const params = new URLSearchParams({
      pa: this.upiId,
      pn: this.recipientName,
      am: this.validAmount ? this.amount.toFixed(2) : '',
      cu: 'INR',
      tn: this.paymentNote.trim() || 'Portfolio support'
    });

    return `upi://pay?${params.toString()}`;
  }

  selectTip(tip: TipOption): void {
    this.selectedAmount = tip.amount;
    this.isCustom = false;
    this.thankYouVisible = false;
    this.statusMessage = '';

    void this.generateQrCode();
  }

  selectCustomAmount(): void {
    this.isCustom = true;
    this.thankYouVisible = false;
    this.statusMessage = '';

    void this.generateQrCode();
  }

  onCustomAmountChange(value: number | string): void {
    this.customAmount = Number(value);
    this.thankYouVisible = false;
    this.statusMessage = '';

    void this.generateQrCode();
  }

  onNoteChange(): void {
    this.thankYouVisible = false;
    void this.generateQrCode();
  }

  async generateQrCode(): Promise<void> {
    if (!this.validAmount) {
      this.qrCodeDataUrl = '';
      return;
    }

    this.isGeneratingQr = true;

    try {
      this.qrCodeDataUrl = await QRCode.toDataURL(
        this.paymentUri,
        {
          width: 240,
          margin: 2,
          errorCorrectionLevel: 'M',
          color: {
            dark: '#111111',
            light: '#FFFFFF'
          }
        }
      );
    } catch (error) {
      console.error('Unable to generate UPI QR code:', error);
      this.qrCodeDataUrl = '';
      this.statusMessage = 'Unable to generate the QR code. Please try again.';
    } finally {
      this.isGeneratingQr = false;
    }
  }

  async copyUpiId(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.upiId);
      this.statusMessage = 'UPI ID copied to clipboard.';
    } catch {
      this.statusMessage = 'Could not copy automatically. Please copy the UPI ID manually.';
    }
  }

  async copyPaymentLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.paymentUri);
      this.statusMessage = 'Payment link copied.';
    } catch {
      this.statusMessage = 'Could not copy the payment link.';
    }
  }

  payWithUpi(): void {
    if (!this.validAmount) {
      this.statusMessage = 'Enter a valid amount between ₹1 and ₹1,00,000.';
      return;
    }

    window.location.href = this.paymentUri;
  }

  showThankYou(): void {
    // This is only a UI acknowledgement, NOT payment verification.
    this.thankYouVisible = true;
    this.statusMessage =
      'Thank you for supporting my work! Your payment has not been verified by this website.';
  }
}