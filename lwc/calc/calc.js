/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { LightningElement, api } from 'lwc';
export default class calc extends LightningElement {
    @api amount = 0;
    @api rate = 0;
    @api duration = 0;
    @api result = 0;
    calculate(e) {
        if(e.target.name === 'Amount'){
            this.amount = parseFloat(e.target.value);
            console.log(this.amount);
        }
        if(e.target.name === 'Rate'){
            this.rate = parseFloat(e.target.value);
            console.log(this.rate);
        }
        if(e.target.name === 'Duration'){
            this.duration = parseFloat(e.target.value);
            console.log(this.duration);
        }        
        this.result = ((this.amount * this.rate * this.duration) / 100) + this.amount; 
        
        console.log(typeof this.amount);  
        console.log(typeof this.result); 
        //console.log(this.result);       
    }
}