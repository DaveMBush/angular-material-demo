import { EditEffects } from './edit.effects';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

const reducers: ActionReducerMap<EditState> = {
  form: EditReducer
}

@NgModule({
  imports: [
    StoreModule.forFeature('edit', reducers),
    EffectsModule.forFeature([EditEffects]),
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EditComponent
    }])

  ],
  declarations: [EditComponent]
})
export class EditModule { }
