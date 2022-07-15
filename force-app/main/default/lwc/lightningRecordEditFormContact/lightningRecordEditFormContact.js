import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class LightningRecordEditFormContact extends LightningElement {
    recordId = "0035h00000ftNrmAAE";
    objectName = CONTACT_OBJECT;

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Contact has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}