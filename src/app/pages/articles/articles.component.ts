import { Component } from '@angular/core';
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";
import { FooterRodapeComponent } from "../../componentes/footer-rodape/footer-rodape.component";

@Component({
    selector: 'app-articles',
    standalone: true,
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.css',
    imports: [MenuBarComponent, FooterRodapeComponent]
})
export class ArticlesComponent {

}
