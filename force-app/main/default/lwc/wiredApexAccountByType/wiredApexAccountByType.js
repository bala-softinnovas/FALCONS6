import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountCtrl.getAccountsByType';

export default class WiredApexAccountByType extends LightningElement {
    accountType = "Prospect";
    accounts;

    @wire(getAccountsByType, {type: '$accountType'})
    accountHandler({data, error}) {
        if(data) {
            console.log(data);
            this.accounts = data;
        }
        if(error) {
            console.log(error);
        }
    }
}