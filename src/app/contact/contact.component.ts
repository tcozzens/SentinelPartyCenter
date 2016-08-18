import { Component, OnInit } from '@angular/core';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';

import { Email } from './email.interface';
import { ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  providers: [ContactService, Http, HTTP_PROVIDERS]
})

export class ContactComponent implements OnInit {

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  public message: Email = { name: '', email: '', message: '' };

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    // console.log(`msg is: {response.status}`);

    if (response.status == 'success') {
      this.message = { name: '', email: '', message: '' };
      alert('We have received your submitted information and will get back to you shortly.');
    }

    if (response.status == 'error') {
      alert('There was an error processing your contact. Please try again shortly.');
    }
  }
}
