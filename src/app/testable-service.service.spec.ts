import { TestBed } from '@angular/core/testing';

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

});
