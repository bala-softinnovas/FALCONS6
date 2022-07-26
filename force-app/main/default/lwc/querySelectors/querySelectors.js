import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {
    fruits = ["Apple", "Orange", "Banana", "Grapes"];

    clickHandler() {
        //querySelector
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText);
        elem.style.border = "2px solid green";
        elem.style.backgroundColor = "yellow";

        //querySelectorAll
        //const allDivs = this.template.querySelectorAll('div');
        const fruitElems = this.template.querySelectorAll(".fruit");
        fruitElems.forEach(item => {
            console.log(item.innerText);
            if(item.innerText === "Apple") {
                item.style.color = "red";
            } else if(item.innerText === "Banana") {
                item.style.color = "yellow";
            } else {
                item.style.color = "black";
            }
            
            item.setAttribute("class", "slds-align_absolute-center");
        })
    }
}