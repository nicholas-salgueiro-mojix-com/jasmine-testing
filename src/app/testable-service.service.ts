import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestableServiceService {

  private numbers: number[] = []

  constructor() { }

  numbersSize(){
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

}
