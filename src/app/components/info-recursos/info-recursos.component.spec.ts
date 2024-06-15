import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecursosComponent } from './info-recursos.component';

describe('InfoRecursosComponent', () => {
  let component: InfoRecursosComponent;
  let fixture: ComponentFixture<InfoRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
