import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeTjeraComponent } from './details-te-tjera.component';

describe('DetailsTeTjeraComponent', () => {
  let component: DetailsTeTjeraComponent;
  let fixture: ComponentFixture<DetailsTeTjeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeTjeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeTjeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
