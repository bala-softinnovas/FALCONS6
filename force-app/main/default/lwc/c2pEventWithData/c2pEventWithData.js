import { LightningElement, track } from 'lwc';

export default class C2pEventWithData extends LightningElement {
    showDetails = false;
    input;
    contactId;
    @track output = {};

    changeHandler(event) {
        this.input = event.target.value;
    }
    clickHandler() {
        this.contactId = this.input;
        this.showDetails = true;
    }
    closeHandler(event) {
        this.showDetails = false;
        console.log(event);
        console.log(JSON.stringify(event.detail));
        //{
        //    message: "",
        //    info: ""
        //}
        this.output = event.detail;
    }
}