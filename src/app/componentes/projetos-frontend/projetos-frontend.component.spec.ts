import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosFrontendComponent } from './projetos-frontend.component';

describe('ProjetosFrontendComponent', () => {
  let component: ProjetosFrontendComponent;
  let fixture: ComponentFixture<ProjetosFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosFrontendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
