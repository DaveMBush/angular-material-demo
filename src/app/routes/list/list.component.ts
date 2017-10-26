import { Router } from '@angular/router';
import { AppState } from '../../app-state';
import { Contact } from '../../shared/contact';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';
import { DataSource } from '@angular/cdk/collections';

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
  constructor(private store: Store<AppState>,
    private router: Router
  ) {
    this.contacts = store.select(
      (x: AppState) => x.list.list);
  }

  ngOnInit(): void {
    this.store.dispatch(new List.List());
  }

  delete(id: number): void {
    this.store.dispatch(new List.Delete(id));
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  add(): void {
    this.router.navigate(['/add']);
  }

}
