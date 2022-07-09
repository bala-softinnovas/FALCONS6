import { LightningElement } from 'lwc';

export default class ConditionalRendering2 extends LightningElement {
    showContent = true;

    clickHandler() {
        this.showContent = !this.showContent;
    }
}