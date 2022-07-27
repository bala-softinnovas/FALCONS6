import { api, LightningElement } from 'lwc';

export default class DisplayResults extends LightningElement {
    @api result;
    @api error;
    @api columns;
}