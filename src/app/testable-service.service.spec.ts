import { fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';

import { TestableServiceService } from './testable-service.service';

describe('TestableServiceService', () => {
  let service: TestableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add number to numbers array', () => {
    // way to get acess to private member, as it is not mockable
    spyOn((service as any).numbers, 'push').and.callThrough();
    service.addNumber(1)

    expect(service.numbersSize()).toBe(1)
    expect((service as any).numbers.push).toHaveBeenCalledTimes(1)
  })

  it('should add 2 number to numbers array', () => {
    spyOn((service as any).numbers, 'push').and.callThrough();
    service.addNumber(1)
    service.addNumber(2)

    expect(service.numbersSize()).toBe(2)
    expect((service as any).numbers.push).toHaveBeenCalledTimes(2)
  })

  it('should reset number array to 0', () => {
    // given i have added numbers to array
    service.addNumber(1)
    service.addNumber(2)

    // when i call resetNumbers
    service.resetNumbers()
    expect(service.numbersSize()).toBe(0)
  })

  it('should get numbers array', () => {
    // when i call getNumbersArray
    expect(service.getNumbersArray()).toEqual([])
  })

  it('should be true async task', fakeAsync(() => {
    // when i call asyncMethod
    service.asyncMethod()

    flushMicrotasks()
    expect(service.changedObservableSub).toBeTruthy()
  }))

  describe("clock methods", () => {
    beforeEach(() => {
      jasmine.clock().install();
    });
    
    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it("should wait clock timer then check if variable change", () => {
      // calling method with setInteraval 
      service.timerMethod()

      // variable should be false before runnning clock 
      expect(service.changedtimer).toBeFalsy()
      jasmine.clock().tick(501);
      // and true after
      expect(service.changedtimer).toBeTruthy()
    })
  })

});
