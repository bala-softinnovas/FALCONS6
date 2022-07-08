import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    fullname = "Balakrishna";
    title = "Salesforce Developer";

    handleChange(event) {
        this.title = event.target.value;
    }
}