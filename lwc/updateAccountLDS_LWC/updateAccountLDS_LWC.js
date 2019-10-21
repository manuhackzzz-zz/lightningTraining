/* eslint-disable no-console */
import { LightningElement, api } from "lwc";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ID_FIELD from "@salesforce/schema/Account.Id";
import NAME_FIELD from "@salesforce/schema/Account.Name";

export default class LdsUpdateRecord extends LightningElement {
  @api recordId;
  @api accountId;
  @api accountName;

  connectedCallback() {    
    this.accountId = this.recordId;
    console.log("account id>>" + this.accountId);
  }

  handleFormChange(event) {
    if (event.target.value === "accName") {
      this.accountName = event.target.value;
    }
  }
  updateAccount() {
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.accountId;
    fields[NAME_FIELD.fieldApiName] = this.accountName;
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    updateRecord(recordInput)
      .then(account => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Account updated" + account.Id,
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
