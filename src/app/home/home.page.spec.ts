import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { TestableServiceService } from '../testable-service.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let testArray = []
  const testableServiceServiceMock = {} as TestableServiceService
  function createMock() {
    testableServiceServiceMock.addNumber = (num) => testArray.push(num)
    testableServiceServiceMock.getNumbersArray = () => testArray
    testableServiceServiceMock.numbersSize = () => testArray.length
    testableServiceServiceMock.resetNumbers = () => testArray = []
  }
  beforeEach(waitForAsync(() => {
    createMock()
    TestBed.configureTestingModule({
      // importing services and using mocks instead of real ones
      providers: [
        {
          provide: TestableServiceService,
          useValue: testableServiceServiceMock
        }
      ],
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    testableServiceServiceMock.resetNumbers()
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not contain any item in array', () => {
    const items = fixture.debugElement.query(By.css('.number'))
    expect(component).toBeTruthy();
    expect(items).toBeFalsy()
  });

  it('should not contain any item in array', () => {
    const numberOfNumbersToAdd = 4
    for (let index = 0; index < numberOfNumbersToAdd; index++) {
      component.addNumber()
    }

    fixture.detectChanges()
    const items = fixture.debugElement.queryAll(By.css('.number'))

    expect(items.length).toBe(numberOfNumbersToAdd)
  });

  
});
