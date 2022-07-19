import { LightningElement } from 'lwc';

export default class NameAndRole extends LightningElement {
    username;
    role;

    usernameHandler(event) {
        this.username = event.target.value;
    }

    roleHandler(event) {
        this.role = event.target.value;
    }

    get roles() {
        return [
            {label: "Salesforce Admin", value: "Salesforce Admin"},
            {label: "Salesforce Developer", value: "Salesforce Developer"},
            {label: "Salesforce Architect", value: "Salesforce Architect"}
        ];
    }
}