


export class TicketModel {
    tokenId!: string|null;
    amount!: number;
    constructor ( _tokenId:string|null, _amount:number){
        this.tokenId=_tokenId;
        this.amount=_amount;
    }
}
