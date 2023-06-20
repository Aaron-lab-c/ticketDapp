import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider/provider.service';
const abi_ticket = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [], "name": "destroyContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneA", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "mintToZoneD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPublic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" } ], "name": "TransferBatch", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "TransferSingle", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "URI", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "balanceOfBatch", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPublicSale", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "uri", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" } ];
const address_ticket = '0x7727322b54bE55b8e0D14CdADbA7d37e8D6f1572';
interface option {
  label: string;
  value: number;
}
@Component({
  selector: 'app-ticket-transfer',
  templateUrl: './ticket-transfer.component.html',
  styleUrls: ['./ticket-transfer.component.css']
})
export class TicketTransferComponent implements OnInit {
  public contract_ticket!:any;
  public accounts!:string[];
  public result!:boolean;
  public addr!:string;

  public to_address_approve!:string;
  public to_address_revoke!:string;
  public to_address_search!:string;

  public to_address_transfer!:string;
  public selectedValue!:number;
  public amount_transfer!:number;

  public ids:number[]=[0,1,2,3];
  public ids_amounts!:number[];
  public options:option[]=[];

  showOverlay: boolean = false;

  constructor(private provider:ProviderService,private activatedRoute: ActivatedRoute){
    this.showOverlay = true;

    this.addr = this.provider.address[0];
    this.contract_ticket = new this.provider.web3.eth.Contract(
      abi_ticket,address_ticket,{
        from: this.provider.defaultAccount,
        gasPrice: '20000000000'
      });
      this.isApprovedForAll();
      this.accounts=[this.addr,this.addr,this.addr,this.addr];
      this.update_options();

      this.showOverlay = false;

  }
  ngOnInit(): void {
  }


  public async update_options(): Promise<void> {
    await this.contract_ticket.methods.balanceOfBatch(this.accounts,this.ids).call(
      {
        from: this.provider.defaultAccount
      }).then((result: any) => {
        this.ids_amounts=result;
        console.log(result);
        for(let i=0;i<result.length;i++){
          let newOption: option={
            label: "grape",
            value: 0,
          };
          if(i==0 && result[i]>0){
            newOption.label="Zone_A";
            newOption.value=0;
            this.options.push(newOption);
          }
          if(i==1 && result[i]>0){
            newOption.label="Zone_B";
            newOption.value=1;
            this.options.push(newOption);
          }
          if(i==2 && result[i]>0){
            newOption.label="Zone_C";
            newOption.value=2;
            this.options.push(newOption);
          }
          if(i==3 && result[i]>0){
            newOption.label="Zone_D";
            newOption.value=3;
            this.options.push(newOption);
          }
        }
        if(this.options.length==0){
          let newOption: option={
            label: "None",
            value: 666,
          };
          this.options.push(newOption);
        }
        this.selectedValue=this.options[0].value;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  public async isApprovedForAll(): Promise<void> {
    this.showOverlay = true;

    await this.contract_ticket.methods.isApprovedForAll(
      this.addr,
      this.to_address_search
    ).call(
      {
        from: this.provider.defaultAccount
      }).then((result: any) => {
        //this.approve_status=result;
        console.log(result);
        alert(result);
        this.showOverlay = false;

      })
      .catch((error: any) => {
        console.error(error);
        this.showOverlay = false;

      });
  }
    //轉讓
    public async safeTransferFrom(): Promise<boolean> {
      if(this.selectedValue>=0 && this.selectedValue<=3){
      }else{
        alert("輸入錯誤票券種類!");
        return false;
      }
      let bytes_temp: number[] = [];
      try {
        this.showOverlay = true;
        await this.contract_ticket.methods
          .safeTransferFrom(
            this.addr,
            this.to_address_transfer,
            this.selectedValue,
            this.amount_transfer,
            bytes_temp
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
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
  }
  //授權轉讓
  public async Approve(): Promise<boolean> {
      try {
        this.showOverlay = true;

        await this.contract_ticket.methods
          .setApprovalForAll(
            this.to_address_approve,
            true
          )
          .send({
            from: this.provider.address[0],
            gas: 4000000 // 設定適當的 gas 限制
          }).then((result: any) => {
            console.log(result);
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
  }

  //關閉轉讓
  public async Revoke(): Promise<boolean> {
    try {
      this.showOverlay = true;
      await this.contract_ticket.methods
        .setApprovalForAll(
          this.to_address_revoke,
          false
        )
        .send({
          from: this.provider.address[0],
          gas: 4000000 // 設定適當的 gas 限制
        }).then((result: any) => {
          console.log(result);
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
}
}
