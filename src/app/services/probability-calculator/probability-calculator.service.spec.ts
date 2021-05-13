import { TestBed } from '@angular/core/testing';

import { ProbabilityCalculatorService } from './probability-calculator.service';

describe('ProbabilityCalculatorService', () => {
  let service: ProbabilityCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbabilityCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * NOTE: Generally, I like to stick to one *thing* per test but, in angular, 
   * the lack of test case support (like TestCaseAttribute in C#) means that I favour this approach.
   */

  // Test "combinedWith"

  it('should should give the expected answer when calling combinedWith', () => {
    expect(service.combinedWith(0, 0)).toBe((0));
    expect(service.combinedWith(0.5, 0.5)).toBe((0.25));
    expect(service.combinedWith(1, 1)).toBe((1));
  });

  it('should should error with invalid probabilities when calling combinedWith', () => {
    expect(() => service.combinedWith(-0.1, 0.5)).toThrowError();
    expect(() => service.combinedWith(1.1, 0.5)).toThrowError();
    expect(() => service.combinedWith(0, -0.1)).toThrowError();
    expect(() => service.combinedWith(0, 1.1)).toThrowError();
  });

  // Test "either"

  it('should should give the expected answer when calling either', () => {
    expect(service.either(0, 0)).toBe((0));
    expect(service.either(0.5, 0.5)).toBe((0.75));
    expect(service.either(1, 1)).toBe((1));
  });

  it('should should error with invalid probabilities when calling either', () => {
    expect(() => service.either(-0.1, 0.5)).toThrowError();
    expect(() => service.either(1.1, 0.5)).toThrowError();
    expect(() => service.either(0, -0.1)).toThrowError();
    expect(() => service.either(0, 1.1)).toThrowError();
  });
});
