import { AlertComponent } from '../../shared/alert/alert.component';
import { Router } from '@angular/router';
import { AppState } from '../../app-state';
import { Contact } from '../../shared/contact';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: Observable<ReadonlyArray<Contact>>;
  dataSource: DataSource<Contact> = {
    disconnect: (): void => { return; },
    connect: (): Observable<Array<Contact>> => <Observable<Array<Contact>>>this.contacts
  };
  displayedColumns: ReadonlyArray<string> = ['firstName', 'lastName', 'dateOfBirth', 'delete'];
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private dlg: MatDialog
  ) {
    this.contacts = store.select(
      (x: AppState) => x.list.list);
  }

  ngOnInit(): void {
    this.store.dispatch(new List.List());
  }

  delete(evt: Event, id: number): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.dlg.open<AlertComponent>(AlertComponent, { height: '200px', width: '300px', data: 'Are you sure you want to delete?' })
      .afterClosed()
      .filter((x: string) => x === 'yes')
      .subscribe((): void =>
        this.store.dispatch(new List.Delete(id))
      );
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  add(): void {
    this.router.navigate(['/add']);
  }

}
