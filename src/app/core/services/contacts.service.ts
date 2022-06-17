import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { messagesListMock } from '../mocks/messages-list.mock';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  APIPath: string = environment.APIUrl + '/contacts'

  private _contacts: IUser[] = [];

  get messagesContacts() {
    return of([...this._contacts]);
  }

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
    var storedContacts = localStorageService.get('contacts') as IUser[] ?? [];
    this._contacts = storedContacts;
  }

  load() {
    var storedIds = this._contacts.map(x => x.id);

    // Since it is an example just using a mocked data
    this.getMockContacts()
      .subscribe(data => {
        var newContacts = data.filter(contact => !storedIds.find(item => item == contact.id));
        if (newContacts.length) {
          this._contacts = [...this._contacts, ...newContacts];
          this.localStorageService.set('contacts', this._contacts);
        }
      });
  }

  delete(id: string) {
    // Since it is just an example, will do just:
    this._contacts = this._contacts.filter(x => x.id != id);
    this.localStorageService.set('contactss', this._contacts);
  }

  getMockContacts() {
    return of([...messagesListMock.map(x=>x.user)]);
  }

}
