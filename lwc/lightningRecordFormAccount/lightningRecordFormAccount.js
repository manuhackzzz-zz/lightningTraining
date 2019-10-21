/* eslint-disable no-console */
import { LightningElement,api } from 'lwc';
import Name from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';

export default class LightningRecordFormAccount extends LightningElement {
    @api recordId;
    fields = [Name, AnnualRevenue];

    handleSubmit(result){
        console.log(result);
    }
    handleSuccess(){
        console.log('Updated successfully.');
    }
}