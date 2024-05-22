import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrecoComponent } from './info-preco.component';

describe('InfoPrecoComponent', () => {
  let component: InfoPrecoComponent;
  let fixture: ComponentFixture<InfoPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPrecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
