import { Component} from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";


@Component({
    selector: 'app-projetos-frontend',
    standalone: true,
    templateUrl: './projetos-frontend.component.html',
    styleUrl: './projetos-frontend.component.css',
    imports: [CarouselComponent]
})
export class ProjetosFrontendComponent {

  
}

