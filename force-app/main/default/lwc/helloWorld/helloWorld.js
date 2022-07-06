import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name; //undefined
    fullname = "Salesforce Developer"; //string
    age = 30; //number
    location = {
        city: "Houston",
        country: "United States",
        postalCode: "50033"
    }; //object
    fruits = ["Banana", "Orange", "Pomogranite", "Pineapple"]; //array
}