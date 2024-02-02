import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../componentes/menu-title/menu-title.component";
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../componentes/big-card/big-card.component";
import { SmallCardComponent } from "../../componentes/small-card/small-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, MenuBarComponent, BigCardComponent, SmallCardComponent]
})
export class HomeComponent {

}
