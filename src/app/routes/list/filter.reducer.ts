import { ActionReducer } from '@ngrx/store';
import * as Filter from './filter.actions';

export function filterReducer(
    // tslint:disable-next-line:typedef
    state = '',
    action: Filter.Set):
    string {
    switch (action.type) {
        case Filter.SET:
            return action.filter;
        default:
            return state;
    }
}
export const FilterReducer:
    ActionReducer<string> =
    filterReducer;
