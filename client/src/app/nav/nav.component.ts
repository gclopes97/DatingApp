import { AccountService } from './../../../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {} 

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout()
  }
}
