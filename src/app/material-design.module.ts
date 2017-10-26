import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSnackBarModule
} from '@angular/material';

// tslint:disable-next-line:no-any
const materialDesignComponents: ReadonlyArray<Type<any>> = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialDesignComponents
  ],
  exports: [
    ...materialDesignComponents
  ],
  declarations: []
})
export class MaterialDesignModule { }
