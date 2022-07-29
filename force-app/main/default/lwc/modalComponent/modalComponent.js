import { LightningElement } from 'lwc';

export default class ModalComponent extends LightningElement {
    closeHandler() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}