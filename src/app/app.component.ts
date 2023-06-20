import { Component } from '@angular/core';
import { ProviderService } from './services/provider/provider.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public WalletAddress: string ="";
  Status:string = "狀態：尚未連接錢包";
  title = 'ticket';
    constructor(private provider: ProviderService) {
      this.ConnectWallet();
      this.provider.getAccount().pipe(take(1)).subscribe(accounts => {
        console.log("home:"+accounts);

        const currentAddress = this.provider.web3.eth.coinbase;
        console.log("currentAddress"+currentAddress);
      });

  }
    /*連接錢包(前端呼叫)*/
    public ConnectWallet(): void{
      this.provider.ConnectWallet().subscribe(
        {
          next: (res: string) => { this.WalletAddress = res; },
          error: (err) => { console.log("end Point:ERROR");console.error(err+"s") },
          complete: () => {console.log("complete2");this.Status="狀態：已連接錢包 | 目前地址：";} 
        }
      );
    }
}
