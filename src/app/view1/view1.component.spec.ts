import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES } from '@infragistics/igniteui-angular';
import { View1Component } from './view1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ View1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
