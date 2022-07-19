import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class GetPicklistValulesAccount extends LightningElement {

    accountRtId;
    industryOptions = [];
    selectedIndustry;

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfoHandler({data, error}) {
        if(data) {
            this.accountRtId = data.defaultRecordTypeId;
        }
    }

    @wire(getPicklistValues, {fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accountRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.industryOptions = this.picklistGenerator(data);
        }
        if(error) {
            console.error(error);
        }
    }

    picklistGenerator(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    changeHandler(event) {
        this.selectedIndustry = event.target.value;
    }
}