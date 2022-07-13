import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class LightningRecordFormContact extends LightningElement {
    recordId = "0035h00000ftNs4AAE";
    objectName = CONTACT_OBJECT;

    successHandler() {
        const successEvent = new ShowToastEvent({
            title: "Success",
            message: "The contact record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successEvent);
    }

    errorHandler() {
        const errorEvent = new ShowToastEvent({
            title: "Error",
            message: "An error occurred while saving the contact record!",
            variant: "error"
        });
        this.dispatchEvent(errorEvent);
    }
}