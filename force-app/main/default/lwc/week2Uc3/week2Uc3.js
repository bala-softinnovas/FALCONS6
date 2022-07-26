import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import getOppsByStage from '@salesforce/apex/OpportunityCtrl.getOppsByStage';

import OPP_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

const COLUMNS = [
    {label: "Opportunity Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Amount", fieldName: "Amount", type: "currency"},
    {label: "Stage", fieldName: "StageName", type: "text"},
    {label: "Close Date", fieldName: "CloseDate", type: "date"}
];

export default class Week2Uc3 extends LightningElement {
    oppRtId;
    stageOptions = [];
    selectedStage;
    opps;
    columns = COLUMNS;

    @wire(getObjectInfo, {objectApiName: OPP_OBJECT})
    objectInfoHandler({data, error}) {
        if(data) {
            this.oppRtId = data.defaultRecordTypeId;
        }
    }
    @wire(getPicklistValues, {fieldApiName: STAGE_FIELD, recordTypeId: '$oppRtId'})
    stageNameHandler({data, error}) {
        if(data) {
            this.stageOptions = this.picklistGenerator(data);
        }
    }

    picklistGenerator(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    changeHandler(event) {
        this.selectedStage = event.target.value;
        getOppsByStage({stage: this.selectedStage})
            .then(result => {
                this.opps = result;
            })
            .catch(error => {
                console.log(error);
            })
    }
}