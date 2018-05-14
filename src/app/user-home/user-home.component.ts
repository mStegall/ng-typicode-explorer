import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user-shared/user.service';
import { User } from '../user-shared/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  id$: Observable<string>;
  user$: Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  getHero(idString: string) {
    const id = parseInt(idString, 10);
    return this.userService.getUser(id);
  }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.getHero(params.get('id')))
    );
    this.id$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id'))
    );
  }
}
