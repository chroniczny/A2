import { Injectable } from '@angular/core';
import { AppId } from './appId'; //type
import { IDS } from './mock-id'; // my mock data
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercomService {
  // APP_ID: string = "if0ohjsi";

  public getIds(): Observable<AppId[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(IDS);
  }

  // public boot(): void {
  //   // @ts-ignore
  //   window.intercomSettings = {
  //     app_id: this.APP_ID
  //   };
  //
  //   // @ts-ignore
  //   window.Intercom('boot', {
  //     app_id: this.APP_ID,
  //     custom_launcher_selector: '#my_custom_link'
  //   })
  // }

  constructor() { }
}
