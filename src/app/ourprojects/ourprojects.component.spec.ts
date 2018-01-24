import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprojectsComponent } from './ourprojects.component';

describe('OurprojectsComponent', () => {
  let component: OurprojectsComponent;
  let fixture: ComponentFixture<OurprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
