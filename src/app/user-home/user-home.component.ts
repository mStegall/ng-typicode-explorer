import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../user-shared/user.service';
import { User } from '../user-shared/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user: User;

  error: string ;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  userError = (error: Error) => {
    this.error = `We had some trouble getting your user: ${error.message}`;
    console.log(this.error);
    return of({} as User);
  }

  getUser(idString: string) {
    const id = parseInt(idString, 10);
    if (isNaN(id)) {
      throw new Error(`${idString} is not a user id`);
    }
    return this.userService.getUser(id);
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(idString => this.getUser(idString))
        catchError(this.userError)
      )
      // .subscribe(_ => null);
    .subscribe(user => (this.user = user));
  }
}
