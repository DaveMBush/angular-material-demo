import { FilterReducer } from './filter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListReducer } from './list.reducer';
import { ListState } from './list-state';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialDesignModule } from '../../material-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { APP_BASE_HREF } from '@angular/common';

const reducers: ActionReducerMap<ListState> = {
  list: ListReducer,
  filter: FilterReducer
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(
          'list', reducers),
        AppRoutingModule,
        MaterialDesignModule],
      declarations: [ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
