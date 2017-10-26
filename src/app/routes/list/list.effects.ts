import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
import { Contact } from '../../shared/contact';
import { ContactsService } from '../../shared/contacts.service';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as List from './list.actions';

Injectable()
export class ListEffects {
    @Effect()
    list$: Observable<List.ListResult> =
    this.actions$
        .ofType(List.LIST)
        .switchMap(() => this.store.select((x: AppState) => x.list.filter))
        .switchMap((filter: string):
            Observable<{} | ReadonlyArray<Contact>> =>
            this.contactsService.list(filter))
        .map((x: ReadonlyArray<Contact>):
            List.ListResult =>
            new List.ListResult(x)
        );

    @Effect()
    delete$: Observable<List.List> =
    this.actions$
        .ofType(List.DELETE)
        .switchMap(
        (action: List.Delete): Observable<{}> => this
            .contactsService
            .delete(action.id)
        )
        .map((): List.List => new List.List());

    constructor(private actions$: Actions,
        private contactsService: ContactsService,
        private store: Store<AppState>
    ) { }
}
