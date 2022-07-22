import { LightningElement, wire } from 'lwc';
import getBiotechAccounts from '@salesforce/apex/AccountCtrl.getBiotechAccounts';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Account Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class WiredApexAccounts extends LightningElement {
    accounts;
    columns = COLUMNS;
    
    @wire(getBiotechAccounts)
    accountHandler({data, error}) {
        if(data) {
            this.accounts = data;
        }
        if(error) {
            console.log(error);
        }
    }
}