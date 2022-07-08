import { LightningElement, track } from 'lwc';

export default class TrackProperty2 extends LightningElement {
    @track details = {
        name: "Jeff Bezos",
        title: "Executive Chairman",
        company: "Amazon"
    };

    handleChange(event) {
        this.details.company = event.target.value;
    }
}