import { api, LightningElement } from 'lwc';

export default class DisplayInfo extends LightningElement {
    @api studentName;
    @api studentClass;
}