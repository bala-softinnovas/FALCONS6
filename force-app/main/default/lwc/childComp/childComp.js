import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    clickHandler() {
        console.log("child component is about to send a show event!");
        const clickEvent = new CustomEvent('show', {bubbles: false, composed: false});
        this.dispatchEvent(clickEvent);        
    }
}