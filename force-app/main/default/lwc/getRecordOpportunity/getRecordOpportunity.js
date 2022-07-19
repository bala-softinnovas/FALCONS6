import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordOpportunity extends LightningElement {
    recordId = "0065h00000DcB5PAAV";
    name;
    account;
    owner;
    amount;
    closeDate;

    @wire(getRecord, {recordId: '$recordId', layoutTypes: ['Compact'], modes: ['View']})
    oppHandler({data, error}) {
        if(data) {
            console.log(data);
            this.name = data.fields.Name.value;
            this.account = data.fields.Account.displayValue;
            this.owner = data.fields.Owner.displayValue;
            this.amount = data.fields.Amount.displayValue;
            this.closeDate = data.fields.CloseDate.displayValue;
        }
        if(error) {
            console.error(error);
        }
    }
}