import { LightningElement } from 'lwc';

export default class C2pSimpleEvent extends LightningElement {
    showModal = false;
    clickHandler() {
        this.showModal = true;
    }
    childHandler() {
        this.showModal = false;
    }
}