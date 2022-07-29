import { api, LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {
    @api progressValue;

    @api resetProgress() {
        this.progressValue = 50;
    }
}