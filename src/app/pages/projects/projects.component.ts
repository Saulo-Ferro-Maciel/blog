import { Component } from '@angular/core';
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";
import { FooterRodapeComponent } from "../../componentes/footer-rodape/footer-rodape.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [MenuBarComponent, FooterRodapeComponent]
})
export class ProjectsComponent {

}
