import { FilterReducer } from './filter.reducer';
import { ListEffects } from './list.effects';
import { ListReducer } from './list.reducer';
import { ListState } from './list-state';
import { MaterialDesignModule } from '../../material-design.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

const reducers: ActionReducerMap<ListState> = {
  list: ListReducer,
  filter: FilterReducer
}

@NgModule({
  imports: [
    FlexLayoutModule,
    StoreModule.forFeature(
      'list', reducers),
    EffectsModule.forFeature(
      [ListEffects]),
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ListComponent
    }]),
    MaterialDesignModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
