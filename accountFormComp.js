import { LightningElement, api,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AccountFormComp extends LightningElement 
{
    @track isLoading = false;
    fields = ['BillingAddress', 'Website', 'Fax'];
    @api recordId;
    handleSubmit(event) 
    {this.isLoading = true;
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        this.isLoading = false;
        console.log('onsuccess event recordEditForm', event.detail.id);
        this.showToast('Success', 'Record Saved', 'success');
    }
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}