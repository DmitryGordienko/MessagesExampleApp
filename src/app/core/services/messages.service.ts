import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { messagesListMock } from '../mocks/messages-list.mock';
import { IMessage } from '../models/message.model';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  APIPath: string = environment.APIUrl + '/messages'

  private _messages: IMessage[] = [];

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
    var storedMessages = localStorageService.get('messages') as IMessage[] ?? [];
    this._messages = storedMessages;
  }

  load() {
    var storedIds = this._messages.map(x => x.id);

    // Since it is an example just using a mocked data
    this.getMockMessages()
      .subscribe(data => {
        var newMessages = data.filter(message => !storedIds.find(item => item == message.id));
        if (newMessages.length) {
          this._messages = [...this._messages, ...newMessages];
          this.localStorageService.set('messages', this._messages);
        }
      });
  }

  getFiltered(searchString: string) {
    searchString = searchString.toLocaleLowerCase();
    return of(this._messages.filter(x => !searchString.length || x.user.nickname.toLocaleLowerCase().includes(searchString) || x.text.toLocaleLowerCase().includes(searchString)));
  }

  deleteMessage(id: string) {
    // A delete logic here
    /*
    this.httpClient.delete(`${this.APIPath}/${id}`).subscribe(
      res=>{
        this._messages = this._messages.filter(x=> x.id != id);
        this.localStorageService.set('messages', this._messages);
      },
      err=>{
        console.log(err);
      }
    );
    */

    // But, since it is just an example, will do just:
    this._messages = this._messages.filter(x => x.id != id);
    this.localStorageService.set('messages', this._messages);
  }

  deleteByUserId(userId: string) {
    this._messages = this._messages.filter(x => x.user.id != userId);
    this.localStorageService.set('messages', this._messages);
  }

  getMockMessages() {
    return of([...messagesListMock]);
  }

}
