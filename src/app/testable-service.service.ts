import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestableServiceService {

  private numbers: number[] = []

  constructor() { }

  numbersSize() {
    return this.numbers.length;
  }

  addNumber(number: number) {
    this.numbers.push(number)
  }

  resetNumbers() {
    this.numbers = []
  }

  getNumbersArray() {
    return this.numbers
  }
  changedObservableSub = false

  asyncMethod() {
    of(true).subscribe((value) => this.changedObservableSub = value)
  }

  changedtimer = false

  timerMethod() {
    setInterval(() => this.changedtimer = true, 500)
  }

}
