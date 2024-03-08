import { Component } from '@angular/core';
import { FooterRodapeComponent } from "../../componentes/footer-rodape/footer-rodape.component";
import { SmallCardComponent } from "../../componentes/small-card/small-card.component";
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";

@Component({
    selector: 'app-articles',
    standalone: true,
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
    imports: [FooterRodapeComponent, SmallCardComponent, MenuBarComponent]
})
export class ArticlesComponent {

}
