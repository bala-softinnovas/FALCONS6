import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPP_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';

export default class Week2Uc1 extends LightningElement {

    oppRtId;
    stageOptions = [];
    typeOptions = [];
    oppName;
    selectedStage;
    selectedType;

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

    @wire(getPicklistValues, {fieldApiName: TYPE_FIELD, recordTypeId: '$oppRtId'})
    typeHandler({data, error}) {
        if(data) {
            this.typeOptions = this.picklistGenerator(data);
        }
    }

    picklistGenerator(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    changeHandler(event) {
        if(event.target.name === "Name") {
            this.oppName = event.target.value;
        } else if(event.target.name === "Stage") {
            this.selectedStage = event.target.value;
        } else {
            this.selectedType = event.target.value;
        }
    }
}