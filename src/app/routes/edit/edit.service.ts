import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app-state';
import { EditForm } from './edit-form';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import * as Edit from './edit.actions';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class EditService implements OnInit, OnDestroy {
    form: FormGroup;
    formSubscription: Subscription;
    editEntity: Store<EditForm>;
    editEntitySubscription: Subscription;
    // tslint:disable-next-line:typedef
    saving = false;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.form = this.formBuilder.group({
            id: ['', Validators.nullValidator],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required]
        });
        this.editEntity = this.store.select(
            (x: AppState) => x.edit.form);
    }

    ngOnInit(): void {
        this.formSubscription =
            this.form.valueChanges.subscribe(
                (x: EditForm) =>
                    this.store.dispatch(new Edit.Update(x))
            );
        this.editEntitySubscription =
            this.editEntity.map((x: EditForm): EditForm => {
                this.form.patchValue({
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    dateOfBirth: new Date(x.dateOfBirth)
                }, { emitEvent: false });
                return x;
            })
                .filter(() => this.saving)
                .map((x: EditForm) => this.snackBar.open(x.firstName + ' ' + x.lastName + ' Saved!', 'x', { duration: 2000 }))
                .subscribe(() => this.saving = false);
        this.route.params.first()
            .subscribe((params: Map<string, string>) => {
                this.store.dispatch(
                    new Edit.Get(parseInt(
                        params['id'] ?
                            params['id'] : '-1', 10)));
            });

    }

    public ngOnDestroy(): void {
        this.formSubscription.unsubscribe();
        this.editEntitySubscription.unsubscribe();
    }

    save(): void {
        this.saving = true;
        this.store.dispatch(new Edit.Save());
    }

    cancel(): void {
        this.router.navigate(['/list']);
    }
}
