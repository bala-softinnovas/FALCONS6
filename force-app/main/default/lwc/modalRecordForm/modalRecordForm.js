import { api, LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class ModalRecordForm extends LightningElement {
    @api recordId;
    objectName = ACCOUNT_OBJECT;
    closeHandler() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}