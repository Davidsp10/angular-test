import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsComponent } from './mutants.component';

describe('MutantsComponent', () => {
  let component: MutantsComponent;
  let fixture: ComponentFixture<MutantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
