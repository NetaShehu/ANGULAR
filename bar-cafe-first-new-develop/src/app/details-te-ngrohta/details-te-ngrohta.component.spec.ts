import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeNgrohtaComponent } from './details-te-ngrohta.component';

describe('DetailsTeNgrohtaComponent', () => {
  let component: DetailsTeNgrohtaComponent;
  let fixture: ComponentFixture<DetailsTeNgrohtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeNgrohtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeNgrohtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
