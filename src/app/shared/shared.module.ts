import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const reducers: ActionReducerMap<{}> = {
}

@NgModule({
    providers: [ContactsService],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('shared',
            reducers),
        EffectsModule.forFeature([])
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class SharedModule { }
