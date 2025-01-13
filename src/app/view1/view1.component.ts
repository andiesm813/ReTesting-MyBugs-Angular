import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_BANNER_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRadioComponent, IgxRadioGroupDirective, IgxRippleDirective, IgxSnackbarComponent, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-view1',
  imports: [FormsModule, FormsModule, IgcFormsModule, IGX_BANNER_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRadioComponent, IgxRadioGroupDirective, IgxRippleDirective, IgxSnackbarComponent, IgxSwitchComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component {
  public checked: boolean = true;
  public value: string = '1';
  public value1: number = 4;
  public value2: number = 0;
}
