import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxSwitchComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxIconButtonDirective, IgcFormsModule, IgxBadgeComponent, IgxAvatarComponent, IGX_TREE_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { View1Component } from './view1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ View1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxSwitchComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxIconButtonDirective, IgcFormsModule, IgxBadgeComponent, IgxAvatarComponent, IGX_TREE_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IgxSnackbarComponent ]
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
