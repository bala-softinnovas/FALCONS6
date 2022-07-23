import { LightningElement } from 'lwc';
import searchContacts from '@salesforce/apex/ContactCtrl.searchContacts';

const COLUMNS = [
    {label: "First Name", fieldName: "FirstName", type: "text"},
    {label: "Last Name", fieldName: "LastName", type: "text"},
    {label: "Title", fieldName: "Title", type: "text"},
    {label: "Department", fieldName: "Department", type: "text"}
];

export default class ImperativeApexSearchContacts extends LightningElement {
    columns = COLUMNS;
    searchWord;
    contacts;
    error = "Start entering key words to get matching contacts...";
    changeHandler(event) {
        this.searchWord = event.target.value;
        searchContacts({searchKey: this.searchWord})
            .then(result => {
                this.contacts = result;
                if(this.contacts.length == 0) {
                    this.error = "There are no matching contacts with the given input " 
                    + this.searchWord
                    + ". Start trying in or enter another search keys.";
                } else {
                    this.error = undefined;
                }
            })
            .catch(error => {
                console.log(error)
                this.error = error.body.message;
                this.contacts = undefined;
            })
    }
}