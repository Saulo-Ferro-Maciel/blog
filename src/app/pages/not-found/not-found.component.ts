import { Component } from '@angular/core';
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";
import { FooterRodapeComponent } from "../../componentes/footer-rodape/footer-rodape.component";

@Component({
    selector: 'app-not-found',
    standalone: true,
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
    imports: [MenuBarComponent, FooterRodapeComponent]
})
export class NotFoundComponent {

}
