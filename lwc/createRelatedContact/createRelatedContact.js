import { LightningElement, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import ACCOUNTID_FIELD from "@salesforce/schema/Contact.AccountId";
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";

export default class LdsCreateRecord extends LightningElement {
  @track accountId;
  @track contactId;
  @track firstName;
  @track lastName;

  handleFormChange(event) {
    if(event.target.name === 'accId'){
      this.accountId = event.target.value;
    }
    if(event.target.name === 'conFname'){
      this.firstName = event.target.value;
    }
    if(event.target.name === 'conLname'){
      this.lastName = event.target.value;
    }    
  }
  createContact() {
    const fields = {};
    fields[ACCOUNTID_FIELD.fieldApiName] = this.accountId;
    fields[FIRSTNAME_FIELD.fieldApiName] = this.firstName;
    fields[LASTNAME_FIELD.fieldApiName] = this.lastName;
    const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then(contact => {
        this.contactId = contact.id;
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Contact created",
            variant: "success"
          })
        );
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error creating record",
            message: error.body.message,
            variant: "error"
          })
        );
      });
  }
}
