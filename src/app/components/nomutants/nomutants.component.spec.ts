import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomutantsComponent } from './nomutants.component';

describe('NomutantsComponent', () => {
  let component: NomutantsComponent;
  let fixture: ComponentFixture<NomutantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomutantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomutantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
