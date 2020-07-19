import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboarService {

  constructor() { }

  chartCard() {
    return [450, 230, 850, 375]
  }
}
