import { getFieldValue, getRecord, updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESC_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

const FIELDS = [SUBJECT_FIELD, DESC_FIELD, PRIORITY_FIELD];

export default class UpdateRecordCase extends LightningElement {
    recordId = "5005h00000QkeZFAAZ";
    formdata = {};
    subject;
    desc;
    priority;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    caseRecordHandler({data, error}) {
        if(data) {
            this.subject = getFieldValue(data, SUBJECT_FIELD);
            this.desc = getFieldValue(data, DESC_FIELD);
            this.priority = getFieldValue(data, PRIORITY_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }

    get priorities() {
        return [
            {label: "High", value: "High"},
            {label: "Medium", value: "Medium"},
            {label: "Low", value: "Low"}
        ]
    }

    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
        this.formdata["Id"] = this.recordId;
    }

    updateCase() {
        const recordInput = {fields: this.formdata};
        updateRecord(recordInput)
            .then(result => {
                console.log(result);
                this.prepareToast("Success", "Case Updated!", "success");
            })
            .catch(error => {
                console.log(error);
                this.prepareToast("Error", "Update Failed!", "error");
            })
    }

    prepareToast(title, message, variant) {
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }
}