import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from '../busineslayer/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit, OnDestroy {

   private accountList: IAccount[];
   private showAddAccountForm:boolean=false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getFromApiAccount();
  }

  showForm(){
    this.showAddAccountForm = !this.showAddAccountForm;
  }

  editAccount(event){
    console.log(event);
  }

  deleteAccount(event){
    console.log(event);
  }

  ngOnDestroy(): void {
  }

  getFromApiAccount() {
    this.accountService.getAllAccounts().subscribe(data => this.accountList = data);
  }
}




interface IAccount {
  id?: string;
  code: string;
  label: string;
  total_debit: number;
  total_credit: number;
}
