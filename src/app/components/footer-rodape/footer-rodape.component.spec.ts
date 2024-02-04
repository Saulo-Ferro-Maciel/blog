import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRodapeComponent } from './footer-rodape.component';

describe('FooterRodapeComponent', () => {
  let component: FooterRodapeComponent;
  let fixture: ComponentFixture<FooterRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRodapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
