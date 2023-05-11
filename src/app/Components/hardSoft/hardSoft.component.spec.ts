import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hardSoftComponent } from './hardSoft.component';

describe('HardComponent', () => {
  let component: hardSoftComponent;
  let fixture: ComponentFixture<hardSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hardSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hardSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
