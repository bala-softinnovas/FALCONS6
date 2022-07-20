import { LightningElement } from 'lwc';

export default class CreateRecordContact extends LightningElement {
    fields = {};
    changeHandler(event) {
        const {name, value} = event.target;
        this.fields[name] = value;
        console.log(this.fields);
    }
}