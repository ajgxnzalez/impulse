import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
}
}
