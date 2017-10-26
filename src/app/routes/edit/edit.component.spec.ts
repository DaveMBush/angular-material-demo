import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

const reducers: ActionReducerMap<EditState> = {
  form: EditReducer
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('edit', reducers),
        MaterialDesignModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [EditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
