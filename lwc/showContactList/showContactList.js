/* eslint-disable no-console */
import { LightningElement,api,wire } from 'lwc';
import getAllContacts from '@salesforce/apex/fetchContactsController.getAllContacts'
export default class ShowContactList extends LightningElement {
    @api contactList;
    
    @wire(getAllContacts,{})
    callbackmethodname(result){
        this.contactList = result.data;
        console.log("test" + JSON.stringify(result));
    }
}