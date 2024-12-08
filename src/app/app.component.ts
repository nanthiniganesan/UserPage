import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from './userDetails.json';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    RouterOutlet,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  readonly panelOpenState = signal(false);
  constructor() { }
  title = 'my-app';
  fontStyleControl = new FormControl('');
  action = new FormControl('');
  first: any;
  second: any;
  user: any;
  users: any;
  isToggled: boolean = false;
  col: any;
  value:any;
  ngOnInit() {
    this.users = (data as any).default;
  }
  toggleButton(value) {
    if (!this.isToggled || value == "firstUser") {
      this.firstFunction();
    } else if(this.isToggled || value == "secondUser"){
      this.secondFunction();
    }else{this.firstFunction();}
    this.isToggled = !this.isToggled;
  }
  firstFunction() {
    this.user = this.users[0];
  }
  secondFunction() {
    this.user = this.users[1];
  }
}
//eof