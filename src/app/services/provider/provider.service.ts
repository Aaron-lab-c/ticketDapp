import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Observable, from, of, take } from 'rxjs';
import { TransactionParameter } from 'src/app/types';


//const TruffleContract = require("@truffle/contract");
declare let window: any;
declare let require: any;

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private accountList: Array<string> = [];
  public web3: any;
  public address!:string;

  constructor() {
    this.web3 = typeof window.web3 !== 'undefined'
    ? new Web3(window.web3.currentProvider)
    : new Web3(new Web3.providers.WebsocketProvider('http://localhost:7545'));
    this.address = this.web3.eth.getAccounts()[0];
    console.log(this.address+"wtreg");
  }
  
  public ConnectWallet(): Observable<string>{
        this.web3 = typeof window.web3 !== 'undefined'
    ? new Web3(window.web3.currentProvider)
    : new Web3(new Web3.providers.WebsocketProvider('http://localhost:7545'));
    return new Observable<string>(observer => {
      this.enableConnect().pipe(take(1)).subscribe(
        {
          next: (res: string) => {console.log("enableConnect():"+res);this.address=res;observer.next(res);},
          error: (err: any) => { console.error(err);observer.error(err);},
          complete: () => { console.log("complete1");observer.complete();}
        });
    });
  }
  public enableConnect(): Observable<any> {
    return from(this.web3.currentProvider.enable());
  }

  public getCurrentAddress(): Observable<string> {
    let currentAddress!:string;

    if (typeof window.ethereum !== 'undefined') {
      console.error('not connect!');
    }
     else {
      const accounts =  this.web3.eth.getAccounts();
      currentAddress = accounts[0].toString();
    }
    return of(currentAddress);
  }
  


  public getAccount(): Observable<any> {
    return from(this.web3.eth.getAccounts());
  }

  public set defaultAccount(account: string) {
    this.web3.eth.defaultAccount = account;
  }

  public get defaultAccount(): string {
      return this.web3.eth.defaultAccount;
  }

  public getBlock(index: number): Observable<any> {
      return from(this.web3.eth.getBlock(index));
  }

  public getCurrentBlockNumber(): Observable<any> {
      return from(this.web3.eth.getBlockNumber());
  }
  public getTransaction(txHash: string): Observable<any> {
      return from(this.web3.eth.getTransaction(txHash));
  }
  public getReceipt(txHash: string): Observable<any> {
      return from(this.web3.eth.getTransactionReceipt(txHash));
  }
  public sendTransaction(params: TransactionParameter): Observable<any> {
    return from(this.web3.eth.sendTransaction(params));
}
  
}
