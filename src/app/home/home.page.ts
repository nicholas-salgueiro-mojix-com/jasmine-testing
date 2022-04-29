import { Component } from '@angular/core';
import { TestableServiceService } from '../testable-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public readonly testableServiceService: TestableServiceService) { }
  addNumber(){
    this.testableServiceService.addNumber(1)
  }
}
