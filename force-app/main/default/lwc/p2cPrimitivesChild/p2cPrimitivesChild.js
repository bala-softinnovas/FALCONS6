import { api, LightningElement } from 'lwc';

export default class P2cPrimitivesChild extends LightningElement {
    @api name;
    @api age;
    @api placeOfLiving;
}