import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesFrameworksComponent } from './lenguajes-frameworks.component';

describe('LenguajesFrameworksComponent', () => {
  let component: LenguajesFrameworksComponent;
  let fixture: ComponentFixture<LenguajesFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajesFrameworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajesFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
