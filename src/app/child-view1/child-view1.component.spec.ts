import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconComponent } from 'igniteui-angular';
import { ChildView1Component } from './child-view1.component';

describe('ChildView1Component', () => {
  let component: ChildView1Component;
  let fixture: ComponentFixture<ChildView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildView1Component, NoopAnimationsModule, FormsModule, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
