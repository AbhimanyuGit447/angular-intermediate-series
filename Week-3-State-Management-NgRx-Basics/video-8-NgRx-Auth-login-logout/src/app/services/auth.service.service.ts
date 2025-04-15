import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  private registredEmails = ['test@example.com', 'user@demo.com'];

  private takenUsernames = ['admin', 'testuser', 'angularuser'];

  checkEmailAvailability(email : string) : Observable<boolean>{
    const isTaken = this.registredEmails.includes(email);
    return of(isTaken).pipe(delay(1000)); // simulating a API call here
  }


  checkUsername(username : string) : Observable<boolean>{
    return of(this.takenUsernames.includes(username)).pipe(delay(1000));
  }




}
