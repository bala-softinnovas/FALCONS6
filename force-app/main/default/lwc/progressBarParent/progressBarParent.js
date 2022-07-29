import { LightningElement } from 'lwc';

export default class ProgressBarParent extends LightningElement {
    value = 10;
    changeHandler(event) {
        this.value = event.target.value;
    }
    resetprogressBar() {
        this.value = 50;
        this.template.querySelector('c-progress-bar').resetProgress();
    }
}