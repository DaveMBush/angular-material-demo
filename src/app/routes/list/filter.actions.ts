import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const SET = 'Filter.Set';
export class Set implements Action {
    readonly type = SET;
    constructor(public filter: string) { }
}
