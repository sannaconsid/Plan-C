import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [MatSidenavModule, RouterLink, MatListModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBarComponent {

  protected readonly title = signal($localize`Ember`);
}
