import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../busineslayer/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  account: FormGroup = new FormGroup(
    {code : new FormControl(''),
     label : new FormControl(''),
    }

  )
  constructor(private accountService: AccountService) { }

  submitAccount(){
    this.accountService.postAccount(this.account.value).subscribe(data => console.log);
  }

  ngOnInit() {
  }

}
