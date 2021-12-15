import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeFtohtaComponent } from './details-te-ftohta.component';

describe('DetailsTeFtohtaComponent', () => {
  let component: DetailsTeFtohtaComponent;
  let fixture: ComponentFixture<DetailsTeFtohtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeFtohtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeFtohtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
