import { LightningElement } from 'lwc';

export default class C2pSimpleEvent2 extends LightningElement {
    showDetails = false;
    input;
    accountId;
    changeHandler(event) {
        this.input = event.target.value;
    }
    clickHandler() {
        this.accountId = this.input;
        this.showDetails = true;
    }
    closeHandler() {
        this.showDetails = false;
    }
}