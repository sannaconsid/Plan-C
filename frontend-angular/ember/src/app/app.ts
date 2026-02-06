import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatSidenavModule, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  
}
