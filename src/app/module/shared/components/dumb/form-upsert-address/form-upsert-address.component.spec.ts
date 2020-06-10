import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpsertAddressComponent } from './form-upsert-address.component';

describe('FormUpsertAddressComponent', () => {
  let component: FormUpsertAddressComponent;
  let fixture: ComponentFixture<FormUpsertAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpsertAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpsertAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
