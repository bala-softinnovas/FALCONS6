import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    fruits = ["Apple", "Banana", "Orange"];
    num1 = 20;
    num2 = 10;

    get firstFruit() {
        return this.fruits[0];
    }
    get sum() {
        return this.num1+this.num2;
    }
}