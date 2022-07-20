import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

const FIELDS = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, PHONE_FIELD];

export default class GetRecordAccount extends LightningElement {
    recordId = "0015h00000teQGXAA2";
    name;
    type;
    industry;
    phone;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    accountHandler({data, error}) {
        if(data) {
            console.log(data);
            /*
            this.name = data.fields.Name.value;
            this.type = data.fields.Type.value;
            this.industry = data.fields.Industry.value;
            this.phone = data.fields.Phone.value;
            */
           this.name = getFieldValue(data, NAME_FIELD);
           this.type = getFieldValue(data, TYPE_FIELD);
           this.industry = getFieldValue(data, INDUSTRY_FIELD);
           this.phone = getFieldValue(data, PHONE_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }
}