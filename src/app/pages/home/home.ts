
import { Component, ChangeDetectorRef } from '@angular/core';
import { Experience } from '../../sections/experience/experience';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Experience, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly technologies = [
    'Angular',
    'ASP.NET Core',
    'C#',
    'SQL Server',
    'TypeScript'
  ];

  sendMessage(
    event: Event,
    name: string,
    email: string,
    subject: string,
    message: string
  ): void {
    event.preventDefault();

    const recipient = 'YOUR_EMAIL@example.com';

    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      '',
      'Message:',
      message.trim()
    ].join('\n');

    const mailtoUrl =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject.trim())}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }


  phoneCopied = false;
private phoneCopyTimeout?: ReturnType<typeof setTimeout>;

constructor(private cdr: ChangeDetectorRef) {}

async copyPhoneNumber(): Promise<void> {
  const phoneNumber = '7489530796';

  try {
    await navigator.clipboard.writeText(phoneNumber);

    this.phoneCopied = true;
    this.cdr.detectChanges();

    if (this.phoneCopyTimeout) {
      clearTimeout(this.phoneCopyTimeout);
    }

    this.phoneCopyTimeout = setTimeout(() => {
      this.phoneCopied = false;
      this.cdr.detectChanges();
      this.phoneCopyTimeout = undefined;
    }, 1500);
  } catch (error) {
    console.error('Failed to copy phone number:', error);
  }
}


}
