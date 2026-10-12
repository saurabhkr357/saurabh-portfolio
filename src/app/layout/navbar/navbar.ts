
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
