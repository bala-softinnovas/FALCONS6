import { LightningElement } from 'lwc';

export default class TrackProperty extends LightningElement {
    location = {
        city: "Houston",
        country: "United States",
        postalCode: "50021"
    };

    handleChange(event) {
        this.location.city = event.target.value;
    }
}