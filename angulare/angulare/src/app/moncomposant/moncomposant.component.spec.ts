import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncomposantComponent } from './moncomposant.component';

describe('MoncomposantComponent', () => {
  let component: MoncomposantComponent;
  let fixture: ComponentFixture<MoncomposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoncomposantComponent]
    });
    fixture = TestBed.createComponent(MoncomposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
