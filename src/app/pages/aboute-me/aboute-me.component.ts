import { Component } from '@angular/core';
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";
import { FooterRodapeComponent } from "../../componentes/footer-rodape/footer-rodape.component";

@Component({
    selector: 'app-aboute-me',
    standalone: true,
    templateUrl: './aboute-me.component.html',
    styleUrl: './aboute-me.component.css',
    imports: [MenuBarComponent, FooterRodapeComponent]
})
export class AbouteMeComponent {

}
