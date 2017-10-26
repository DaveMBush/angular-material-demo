import { EditState } from './routes/edit/edit-state';
import { ListState } from './routes/list/list-state';

export interface AppState {
    list: ListState;
    edit: EditState;
}
