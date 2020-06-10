import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCardAddressComponent } from './recap-card-address.component';

describe('RecapCardAddressComponent', () => {
  let component: RecapCardAddressComponent;
  let fixture: ComponentFixture<RecapCardAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapCardAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCardAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
