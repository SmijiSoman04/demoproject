import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoprojectComponent } from './demoproject.component';

describe('DemoprojectComponent', () => {
  let component: DemoprojectComponent;
  let fixture: ComponentFixture<DemoprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoprojectComponent]
    });
    fixture = TestBed.createComponent(DemoprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
