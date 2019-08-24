import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  private accountlist:Account[]=[];

  constructor() { }

  ngOnInit() {
    let capital:Account={id:"100001",label:"Capital",debit:12055,credit:13205};
    let immobilisation:Account={id:"200000",label:"Immobilisation",debit:1200,credit:11500};
    let marchandise:Account={id:"300000",label:"Marchandises",debit:14022,credit:18021};

    this.addAccount(capital);
    this.addAccount(immobilisation);
    this.addAccount(marchandise);
  }

  addAccount(_account:Account){
    this.accountlist.push(_account);
}

updateAccount(source:Account,target:Account){
  let accountToUpdateIndex=this.accountlist.indexOf(source);
  this.accountlist[accountToUpdateIndex]=target;
}

deleteAccount(i){
  console.log(`Deleting Account ${i}`);
}

add(){
  let clients:Account={id:"411000",label:"Clients",debit:12556,credit:1002};
  this.addAccount(clients);
}

edit(i){
  console.log(`Editing Account ${i}`);
}

}




interface Account{
  id?:string
  label:string
  debit:number
  credit:number
}