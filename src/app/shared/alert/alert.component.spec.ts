import { MaterialDesignModule } from '../../material-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MAT_DIALOG_DATA, useValue: {}
      },
      {
        provide: MatDialogRef, useValue: {}
      }],
      imports: [
        MaterialDesignModule
      ],
      declarations: [AlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
