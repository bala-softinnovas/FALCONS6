import { api, LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ModalRecordForm2 extends LightningElement {
    @api recordId;
    objectName = CONTACT_OBJECT;

    closeHandler() {
        const successInfo = {
                message: "modal has been closed successfully!",
                info: "NA"
            }
        //const closeEvent = new CustomEvent('closemodal', {detail: "modal has been closed!"});
        const closeEvent = new CustomEvent('closemodal', {detail: successInfo});
        this.dispatchEvent(closeEvent);
    }
}