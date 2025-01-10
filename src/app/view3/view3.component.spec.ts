import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { View3Component } from './view3.component';

describe('View3Component', () => {
  let component: View3Component;
  let fixture: ComponentFixture<View3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ View3Component, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
