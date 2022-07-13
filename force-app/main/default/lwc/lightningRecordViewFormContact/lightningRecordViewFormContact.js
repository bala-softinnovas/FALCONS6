import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import OWNER_FIELD from '@salesforce/schema/Contact.OwnerId';

export default class LightningRecordViewFormContact extends LightningElement {
    recordId = "0035h00000ftNs4AAE";
    objectName = CONTACT_OBJECT;
    fields = {
        name: NAME_FIELD,
        title: TITLE_FIELD,
        account: ACCOUNT_FIELD,
        phone: PHONE_FIELD,
        email: EMAIL_FIELD,
        mobile: MOBILE_FIELD,
        owner: OWNER_FIELD
    };
}