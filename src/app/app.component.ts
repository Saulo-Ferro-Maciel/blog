import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./componentes/menu-title/menu-title.component";
import { MenuBarComponent } from "./componentes/menu-bar/menu-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuTitleComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'blog';
}
