import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDropdownComponent } from './overlay-dropdown.component';

describe('OverlayDropdownComponent', () => {
  let component: OverlayDropdownComponent;
  let fixture: ComponentFixture<OverlayDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
