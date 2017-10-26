import { AlertComponent } from '../../shared/alert/alert.component';
import { Router } from '@angular/router';
import { AppState } from '../../app-state';
import { Contact } from '../../shared/contact';
import { Observable } from 'rxjs/Rx';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as List from './list.actions';
import * as Filter from './filter.actions';
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
  @ViewChild('filter') filter: ElementRef;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private dlg: MatDialog
  ) {
    this.contacts = store.select(
      (x: AppState) => x.list.list
    );
  }

  ngOnInit(): void {
    // lazy way of resetting input, but this is primarily a demo of Material Design
    this.store.select((x: AppState) => x.list.filter)
      .first()
      .subscribe((v: string) => this.filter.nativeElement.value = v);
    this.store.dispatch(new List.List());
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .subscribe((): void => {
        this.store.dispatch(new Filter.Set(this.filter.nativeElement.value))
        this.store.dispatch(new List.List());
      });
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
