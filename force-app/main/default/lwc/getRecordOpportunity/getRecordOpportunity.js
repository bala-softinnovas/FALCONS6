import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.Account.Name';
import OWNER_FIELD from '@salesforce/schema/Opportunity.Owner.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

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
            /*
            this.name = data.fields.Name.value;
            this.account = data.fields.Account.displayValue;
            this.owner = data.fields.Owner.displayValue;
            this.amount = data.fields.Amount.displayValue;
            this.closeDate = data.fields.CloseDate.displayValue;
            */
            this.name = getFieldValue(data, NAME_FIELD);
            this.account = getFieldValue(data, ACCOUNT_FIELD);
            this.owner = getFieldValue(data, OWNER_FIELD);
            this.amount = getFieldDisplayValue(data, AMOUNT_FIELD);
            this.closeDate = getFieldDisplayValue(data, CLOSEDATE_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }
}