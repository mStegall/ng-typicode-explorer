import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  searchInput: string;

  findUser(){
    this.router.navigate(['user', this.searchInput])
  }

  ngOnInit() {}
}
