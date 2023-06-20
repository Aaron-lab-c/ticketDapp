import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { TicketModel } from 'src/app/model/TicketModel';
import { ActivatedRoute } from '@angular/router';

const abi_ticket = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [], "name": "destroyContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneA", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPublic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" } ], "name": "TransferBatch", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "TransferSingle", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "URI", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "balanceOfBatch", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPublicSale", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "uri", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" } ];
const address_ticket = '0x7727322b54bE55b8e0D14CdADbA7d37e8D6f1572';

@Component({
  selector: 'app-ticket-buy',
  templateUrl: './ticket-buy.component.html',
  styleUrls: ['./ticket-buy.component.css']
})

export class TicketBuyComponent implements OnInit {
  public ticketmodel!:TicketModel;
  public result!:boolean;
  public tokenId!:string|null;

  public transactionHash!:string;
  public resultURL!:string;
  public contract_ticket!:any;

  constructor(private provider:ProviderService,private activatedRoute: ActivatedRoute){
    this.tokenId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ticketmodel = new TicketModel(this.tokenId,0);
    this.contract_ticket = new this.provider.web3.eth.Contract(
      abi_ticket,address_ticket,{
        from: this.provider.defaultAccount,
        gasPrice: '20000000000'
      });
  }
  ngOnInit(): void {
  }
  public ticket!:string;
  public amount!:number;
  showOverlay: boolean = false;
  public async Buy(): Promise<boolean> {
    if(this.ticketmodel.amount==0){
      alert("數量不得為零");
      return false;
    }
    let bytes_temp: number[] = [];
    this.showOverlay = true;


    for (let i = 0; i < "test".length; i++) {
      const charCode = "test".charCodeAt(i);
      bytes_temp.push(charCode);
    }
    if(this.tokenId === '0'){
      try {
        await this.contract_ticket.methods
          .mintToZoneA(
            this.provider.address[0],
            0,
            this.ticketmodel.amount,
            bytes_temp
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
            this.resultURL="https://mumbai.polygonscan.com/tx/"+result.transactionHash;
            this.showOverlay = false;
          });
  
        this.result = true;
        return true;
      } catch (error) {
        console.error(error);
        this.result = false;
        this.showOverlay = false;
        return false;
      }
    }else if(this.tokenId === '1'){
      try {
        await this.contract_ticket.methods
          .mintToZoneB(
            this.provider.address[0],
            1,
            this.ticketmodel.amount,
            bytes_temp
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
            this.resultURL="https://mumbai.polygonscan.com/tx/"+result.transactionHash;
            this.showOverlay = false;
          });
  
        this.result = true;
        return true;
      } catch (error) {
        console.error(error);
        this.result = false;
        this.showOverlay = false;
        return false;
      }
    }else if(this.tokenId === '2'){
      try {
        await this.contract_ticket.methods
          .mintToZoneC(
            this.provider.address[0],
            2,
            this.ticketmodel.amount,
            bytes_temp
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
            this.resultURL="https://mumbai.polygonscan.com/tx/"+result.transactionHash;
            this.showOverlay = false;
          });
  
        this.result = true;
        return true;
      } catch (error) {
        console.error(error);
        this.result = false;
        this.showOverlay = false;
        return false;
      }
    }else if(this.tokenId === '3'){
      try {
        await this.contract_ticket.methods
          .mintToZoneD(
            this.provider.address[0],
            3,
            this.ticketmodel.amount,
            bytes_temp
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
            this.resultURL="https://mumbai.polygonscan.com/tx/"+result.transactionHash;
            this.showOverlay = false;
          });
  
        this.result = true;
        return true;
      } catch (error) {
        console.error(error);
        this.result = false;
        this.showOverlay = false;
        return false;
      }
    }else{
      this.showOverlay = false;
      return false;
    }
    
  }
  
  increment(): void {
    if (this.ticketmodel.amount < 3) {
        this.ticketmodel.amount++;
    }
  }

  decrement(): void {
    if (this.ticketmodel.amount > 0) {
      this.ticketmodel.amount--;
    }
  }
}
