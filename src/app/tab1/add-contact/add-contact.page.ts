import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  //contactData: any; 
  constructor(private contacts: Contacts) { }

  ngOnInit() {
  }

  addContactHandler(contactForm: NgForm) {
    console.log(contactForm);
    console.log(contactForm.value);
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      (status) => console.log('Contact saved!', contact, status),
      (error: any) => console.error('Error saving contact.', error)
    );
  }
}
